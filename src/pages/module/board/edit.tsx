import { useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Divider, Modal } from '@mui/material';
import { CreateBoardItemInput } from 'API';
import { FieldType, FormBuilder, FormVariant, IFileValue, TFormField } from 'component/FormBuilder';
import { GraphqlQueryCreateAttachment, GraphqlQueryGetBoardByTitle } from 'function/amplify/graphqlQueries';
import { CKEditorTemplate } from 'component/CustomCKEditor';
import { ComponentType, useEffect, useState } from 'react';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import { uploadData, getUrl } from 'aws-amplify/storage';
import { createBoardItem, ExtendedCreateBoardItemInput, getBoardItem, IBoardItem } from 'function/amplify/restApiQueries';
import queryString from 'query-string';
import { showToast } from 'function/showToast';
import { v4 as uuidv4 } from 'uuid';

const initialValuesTemplate = {
  title: '',
  content: '',
  tag: '',
  author: '',
  attachments: [] as IBoardItem['attachments'],
  isNotice: false,
  views: 0,
  boardId: ''
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

interface IUserAttributes {
  email: string;
  name: string;
  nickname: string;
  picture: string;
  birthdate: string;
}

interface IUser {
  username: string;
  attributes: IUserAttributes;
}

const Edit = ({id}: {id?: string}) => {
  const [board, setBoard] = useState<IBoardItem['board']|undefined>(undefined);
  const [boardItem, setBoardItem] = useState<IBoardItem | undefined>(undefined);
  const [initialValues, setInitialValues] = useState(initialValuesTemplate);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const boardTitle = id;
  const params = queryString.parse(window.location.search);
  const boardItemSeq = params.seq as string || '';

  // Fetch information of board
  useEffect(() => {
    const getBoardItemFromRestApi = async(title: string, seq: number) => {
      const boardItem = await getBoardItem(title, seq) as unknown as IBoardItem;
      setBoardItem(boardItem);
      const { author, ...rest } = boardItem;
      setInitialValues((prev) => ({ ...prev, author: author.username, ...rest }));
      setLoading(false);
    };

    const getBoardFromRestApi = async(title: string) => {
      const board = await GraphqlQueryGetBoardByTitle(title) as unknown as IBoardItem['board'];
      setBoard(board);
      setInitialValues((prev) => ({ ...prev, board: board, boardId: board.id }));
      setLoading(false);
    };

    if (boardTitle) {
      if(boardItemSeq && parseInt(boardItemSeq) > 0) {
        getBoardItemFromRestApi(boardTitle, parseInt(boardItemSeq));
      } else {
        getBoardFromRestApi(boardTitle);
      }
    }
  }, [boardTitle, boardItemSeq]);

  // Fetch user information
  useEffect(() => {
    const getUser = async() => {
      try {
        const session = await fetchAuthSession();
        if (session) {
          const user = await getCurrentUser();
          setInitialValues((prev) => ({ ...prev, author: user.username }));
        }
      } catch (error) {
        //console.log(error);
      }
    };
    getUser();
  }, []);

  // Update initial values after data fetch
  useEffect(() => {
    // For all attachments, add file attribute which is the file saved in S3 for key of attachment.path
    const getFileFromS3 = async() => {
      if (boardItem?.attachments) {
        const updatedAttachments = await Promise.all(
          boardItem.attachments.map(async (attachment) => {
            const signedUrl = await getUrl({ path: attachment.path });
            const file = await fetch(signedUrl.url.href).then((response) => response.blob());
            return {
              ...attachment,
              signedUrl: signedUrl.url.href,
              file: file
            };
          })
        );
        setInitialValues((prev) => ({ ...prev, attachments: updatedAttachments }));
      }
    };

    getFileFromS3();
  }, [boardItem, board]);

  // Submit form data
  const onSubmit = async (values: unknown) => {
    try {
      if (typeof values === 'object' && values !== null) {
        const { attachments, boardItemCategoryId, ...rest } = values as { attachments: IFileValue[] } & CreateBoardItemInput;
  
        // Use attachments separately if present
        let updatedContent = rest.content;

        // Save files to S3 and replace blob URLs with S3 URLs
        const uploadedAttachments = await Promise.all(
          attachments.map(async (attachment) => {
            // Upload file to S3
            const uuid = uuidv4();
            const result = await uploadData({
              path: `public/attachments/${rest.boardId}/${attachment.filename}-${uuid}`,
              data: attachment.file
            }).result;

            // Replace blob URL with S3 URL path in content
            updatedContent = updatedContent.replaceAll(attachment.path, result.path); // Using replaceAll for multiple occurrences

            const createResult = await GraphqlQueryCreateAttachment({
              filename: attachment.filename,
              filetype: attachment.filetype,
              fileSize: attachment.fileSize,
              path: result.path
            }) ;
            return createResult.id;
          })
        );

        // Ensure the remaining values conform to CreateBoardItemInput
        const formBoardValue: ExtendedCreateBoardItemInput = { ...rest };
        formBoardValue.content = updatedContent;
        formBoardValue.attachments = uploadedAttachments;
  
        // Submit the form data
        setLoading(true);
        await createBoardItem({boardId: boardItem?.board?.id ?? board?.id as string, boardItemInput: formBoardValue});
        setLoading(false);
        navigate(`/board/view/${boardItem?.board?.title ?? board?.title}`);
      } else {
        throw new Error('Invalid form values');
      }
    } catch (error) {
      showToast(JSON.stringify(error), 'error');
    }
  };

  // Custom field for CKEditor
  const contentOption = {
    component: CKEditorTemplate as ComponentType<unknown>
  };
  
  // Form fields
  const fields: TFormField[] = [
    { section: 1, type: FieldType.TextField, name: 'title', label: 'Title', required: true },
    { section: 1, type: FieldType.Custom, name: 'content', label: 'Content', required: true, options: contentOption },
    { section: 1, type: FieldType.TextField, name: 'tag', label: 'Tag', required: false },
    { section: 1, type: FieldType.Hidden, name: 'author', label: 'Author', required: true},
    { section: 1, type: FieldType.File, name: 'attachments', label: 'Attachments', required: false, options: {contentId: 'content', multiple: true}},
    { section: 1, type: FieldType.Checkbox, name: 'isNotice', label: 'Is Notice', required: true},
    { section: 1, type: FieldType.Hidden, name: 'bardId', label: 'Board Id', required: true},
    { section: 1, type: FieldType.Hidden, name: 'boardItemCategoryId', label: 'Category Id', required: false},
  ];

  // Form builder props
  const formBuilderProps = {
    variant: FormVariant.LabelOnLeft,
    initialValues,
    onSubmit,
    fields,
  };

  return (
    <Box>
      <Box>
        <h1>{ boardItem?.board?.title || board?.title } - New Board Item</h1>
      </Box>      
      <Divider/>
      <FormBuilder {...formBuilderProps}/>
      <Modal open={loading} >
        <CircularProgress sx={style} size="100px" />
      </Modal>
    </Box>
  );
};

export default Edit;
