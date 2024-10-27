import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Box } from '@mui/material';
import {
  ClassicEditor,
  AccessibilityHelp,
  Autoformat,
  AutoImage,
  Autosave,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  CloudServices,
  Essentials,
  FullPage,
  GeneralHtmlSupport,
  Heading,
  HtmlComment,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  SelectAll,
  ShowBlocks,
  SourceEditing,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
  Undo,
  Editor,
  EditorConfig
} from 'ckeditor5';
import { ButtonBlack, ButtonGroupBlack } from 'component/CustomMaterialUI';
import { useNavigate } from 'react-router-dom';
import { isAdminUser } from 'function/amplify/auth';
import { GraphqlQueryGetDocument, GraphqlQueryUpdateDocument } from 'function/amplify/graphqlQueries';
import { getUserById } from 'function/amplify/restApiQueries';
import { useEffect, useState } from 'react';
import { IDynamicModuleActionProp } from 'interfaces';
import 'ckeditor5/ckeditor5.css';

const Page = (props: IDynamicModuleActionProp) => {
  const { id } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(' ');
  const [author, setAuthor] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const confirmAdmin = async() => {
      const result = await isAdminUser();
      setIsAdmin(result);
    };
    confirmAdmin();
  }, []);

  useEffect(() => {
    const retrieveData = async(id: string) => {
      try {
        const result = await GraphqlQueryGetDocument({id});
        if (result) {
          const { title, content, author } = result;
          setTitle(title ?? '');
          setContent(content ?? '');
          setAuthor(author ?? '');
        }
      } catch (error) {
        console.log(error);
      } 
    };

    retrieveData(id);
  }, [id]);

  useEffect(() => {
    const retrieveData = async(id: string) => {
      try {
        console.log(id);
        const user = await getUserById({id});
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    if (author) {
      retrieveData(author);
    }
  }, [author]);

  const onModifyHandler = () => {
    const path = `/page/edit/${id}`;
    console.log(path);
    return navigate(path);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%', // Adjust height as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 1, // Adjust padding as needed
      }}>
      <Box>
        { title }
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexGrow: 1,
          overflow: 'hidden', // Ensures overflow is handled by the editor
        }}
      >
        <div dangerouslySetInnerHTML={{ __html:content }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          width: '100%', // Ensures ButtonGroup aligns to the right
        }}
      >
        { isAdmin && (
          <ButtonGroupBlack variant="contained" aria-label="button group">
            <ButtonBlack>Configure</ButtonBlack>
            <ButtonBlack onClick={onModifyHandler}>Modify</ButtonBlack>
          </ButtonGroupBlack>
        )}
      </Box>
    </Box>
  );
};

export default Page;