import { useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Divider, Modal } from '@mui/material';
import { Board, CreateBoardItemInput } from 'API';
import { FieldType, FormBuilder, FormVariant, TFormField } from 'component/FormBuilder';
import { GraphqlQueryGetBoardByTitle } from 'function/amplify/graphqlQueries';
import { CKEditorTemplate } from 'component/CustomCKEditor';
import { ComponentType, useEffect, useState } from 'react';
import { AuthUser, fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import { createBoardItem } from 'function/amplify/restApiQueries';

const initialValuesTemplate = {
  title: '',
  content: '',
  tag: '',
  author: '',
  attachments: [],
  isNotice: false,
  views: 0,
  boardItemBoardId: '',
  boardItemCategoryId: null,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const Add = (props: {id?: string}) => {
  const [user, setUser] = useState<AuthUser|undefined>(undefined);
  const [board, setBoard] = useState<Board | undefined>(undefined);
  const [initialValues, setInitialValues] = useState(initialValuesTemplate);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = props;

  // Fetch information of board
  useEffect(() => {
    if (id) {
      const retrieveData = async (id: string) => {
        try {
          const result = await GraphqlQueryGetBoardByTitle(id);
          setBoard(result as Board | undefined);
        } catch (error) {
          console.log(error);
        }
      };
      retrieveData(id);
    }
  }, [id]);

  // Fetch user information
  useEffect(() => {
    const getUser = async() => {
      try {
        const session = await fetchAuthSession();
        if (session) {
          const user = await getCurrentUser();
          setUser(user);
        }
      } catch (error) {
        //console.log(error);
      }
    };
    getUser();
  }, []);

  // Update initial values after data fetch
  useEffect(() => {
    setInitialValues(prev => ({
      ...prev,
      author: user?.userId || '',
      boardItemBoardId: board?.id || '',
    }));
  }, [user, board]);

  const onSubmit = async (values: unknown) => {
    try {
      if (typeof values === 'object' && values !== null) {
        const { attachments, boardItemCategoryId, ...rest } = values as { attachments?: string[] } & CreateBoardItemInput;
  
        // Use attachments separately if present
        const savedAttachments = attachments || [];
  
        // Ensure the remaining values conform to CreateBoardItemInput
        const formBoardValue: CreateBoardItemInput = { ...rest };
  
        // Submit the form data
        //await GraphqlQueryCreateBoardItem(formBoardValue);
        setLoading(true);
        await createBoardItem({boardId: board?.id as string, boardItemInput: formBoardValue});
        setLoading(false);
        navigate(`/board/view/${board?.title}`);
      } else {
        throw new Error('Invalid form values');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const contentOption = {
    component: CKEditorTemplate as ComponentType<unknown>
  };
  
  const fields: TFormField[] = [
    { section: 1, type: FieldType.TextField, name: 'title', label: 'Title', required: true },
    { section: 1, type: FieldType.Custom, name: 'content', label: 'Content', required: true, options: contentOption },
    { section: 1, type: FieldType.TextField, name: 'tag', label: 'Tag', required: false },
    { section: 1, type: FieldType.Hidden, name: 'author', label: 'Author', required: true},
    { section: 1, type: FieldType.File, name: 'attachments', label: 'attachments', required: false, options: {multiple: true}},
    { section: 1, type: FieldType.Checkbox, name: 'isNotice', label: 'Is Notice', required: true},
    { section: 1, type: FieldType.Hidden, name: 'boardItemBoardId', label: 'Board Id', required: true},
    { section: 1, type: FieldType.Hidden, name: 'boardItemCategoryId', label: 'Category Id', required: false},
  ];

  const formBuilderProps = {
    variant: FormVariant.LabelOnLeft,
    initialValues,
    onSubmit,
    fields,
  };

  return (
    <Box>
      <Box>
        <h1>{ board?.title } - New Board Item</h1>
      </Box>      
      <Divider/>
      <FormBuilder {...formBuilderProps}/>
      <Modal open={loading} >
        <CircularProgress sx={style} size="100px" />
      </Modal>
    </Box>
  );
};

export default Add;
