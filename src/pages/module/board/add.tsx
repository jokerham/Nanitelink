import { useNavigate } from 'react-router-dom';
import { Box, Divider } from '@mui/material';
import { Board, CreateBoardItemInput } from 'API';
import { FieldType, FormBuilder, FormVariant, TFormField } from 'component/FormBuilder';
import { GraphqlQueryCreateBoardItem, GraphqlQueryGetBoardByTitle } from 'function/amplify/graphqlQueries';
import { CKEditorTemplate } from 'component/CustomCKEditor';
import { ComponentType, useEffect, useState } from 'react';
import { AuthUser, fetchAuthSession, fetchUserAttributes, FetchUserAttributesOutput, getCurrentUser } from 'aws-amplify/auth';

const initialValuesTemplate = {
  title: '',
  content: '',
  tag: '',
  author: '',
  attachments: [],
  isNotice: false,
  views: 0,
  boardItemBoardId: '',
  boardItemCategoryId: undefined,
};

const Add = (props: {id?: string}) => {
  const [user, setUser] = useState<AuthUser|undefined>(undefined);
  const [userAttribute, setUserAttribute] = useState<FetchUserAttributesOutput|undefined>(undefined);
  const [board, setBoard] = useState<Board | undefined>(undefined);
  const [initialValues, setInitialValues] = useState(initialValuesTemplate);

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
          //console.log(error);
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
          if (user) {
            const attributetmp = await fetchUserAttributes();
            setUserAttribute(attributetmp);
          }
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
      const formBoardValue = values as CreateBoardItemInput;
      await GraphqlQueryCreateBoardItem(formBoardValue);
      navigate('/admin/board/list');
    } catch (error) {
      //console.error(error);
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
    </Box>
  );
};

export default Add;
