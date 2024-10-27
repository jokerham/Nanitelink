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
import { isAdminUser } from 'function/amplify/auth';
import { GraphqlQueryGetDocument, GraphqlQueryUpdateDocument } from 'function/amplify/graphqlQueries';
import { getUserById } from 'function/amplify/restApiQueries';
import { useEffect, useState } from 'react';
import { IDynamicModuleActionProp } from 'interfaces';
import 'ckeditor5/ckeditor5.css';
import { useNavigate } from 'react-router-dom';

const Page = (props: IDynamicModuleActionProp) => {
  const { id } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(' ');
  const [author, setAuthor] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
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

  const CKEditorConfig: EditorConfig = {
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'sourceEditing',
        'showBlocks',
        '|',
        'heading',
        '|',
        'bold',
        'italic',
        'underline',
        '|',
        'link',
        'insertImage',
        'mediaEmbed',
        'insertTable',
        'blockQuote',
        'htmlEmbed',
        '|',
        'bulletedList',
        'numberedList',
        'todoList',
        'outdent',
        'indent'
      ],
      shouldNotGroupWhenFull: false
    },
    plugins: [
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
      Undo
    ],
    heading: {
      options: [
        {
          model: 'paragraph',
          title: 'Paragraph',
          class: 'ck-heading_paragraph'
        },
        {
          model: 'heading1',
          view: 'h1',
          title: 'Heading 1',
          class: 'ck-heading_heading1'
        },
        {
          model: 'heading2',
          view: 'h2',
          title: 'Heading 2',
          class: 'ck-heading_heading2'
        },
        {
          model: 'heading3',
          view: 'h3',
          title: 'Heading 3',
          class: 'ck-heading_heading3'
        },
        {
          model: 'heading4',
          view: 'h4',
          title: 'Heading 4',
          class: 'ck-heading_heading4'
        },
        {
          model: 'heading5',
          view: 'h5',
          title: 'Heading 5',
          class: 'ck-heading_heading5'
        },
        {
          model: 'heading6',
          view: 'h6',
          title: 'Heading 6',
          class: 'ck-heading_heading6'
        }
      ]
    },
    htmlSupport: {
      allow: [
        {
          name: 'div',
          styles: true,
          attributes: true,
          classes: true
        },
        {
          name: /^.*$/,
          styles: true,
          attributes: true,
          classes: true
        }
      ]
    },
    image: {
      toolbar: [
        'toggleImageCaption',
        'imageTextAlternative',
        '|',
        'imageStyle:inline',
        'imageStyle:wrapText',
        'imageStyle:breakText',
        '|',
        'resizeImage'
      ]
    },
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: 'https://',
      decorators: {
        toggleDownloadable: {
          mode: 'manual',
          label: 'Downloadable',
          attributes: {
            download: 'file'
          }
        }
      }
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true
      }
    },
    placeholder: 'Type or paste your content here!',
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
    },
  };
  
  const editorOnReadyHandler = (editor: Editor) => {
    editor.focus();
  };

  const submitHandler = async() => {
    try {
      await GraphqlQueryUpdateDocument({ id: id, content: content });
      const path = '/page/' + id;
      navigate(path);
    } catch (error) {
      console.log(error);
    }
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
        <CKEditor 
          id='editor'
          editor={ ClassicEditor }
          config={ CKEditorConfig }
          data={content}
          onReady={editorOnReadyHandler}
          onChange={(event, editor) => { setContent( editor.getData() ); }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          width: '100%', // Ensures ButtonGroup aligns to the right
        }}
      >
        { isAdmin && 
          (
            <ButtonGroupBlack variant="contained" aria-label="button group">
              <ButtonBlack onClick={ submitHandler }>Submit</ButtonBlack>
            </ButtonGroupBlack>
          )
        }
      </Box>
    </Box>
  );
};

export default Page;