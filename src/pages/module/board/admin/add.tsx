import { Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BoardType, CreateBoardInput, SortOrder } from 'API';
import { FormBuilder, TFormField, FormVariant, FieldType } from 'component/FormBuilder';
import { GraphqlQueryCreateBoard } from 'function/amplify/graphqlQueries';
import { showToast } from 'function/showToast';
import * as Yup from 'yup';

const sections = [
  {seq: 1, label: 'Basic Setting'},
  {seq: 2, label: 'Advanced Setting'},
  {seq: 3, label: 'Category Setting'},
];

const boardTypeOption = {
  hasAny: false,
  hasNone: false,
  data: [
    {label: 'Default', value: 'default'},
    {label: 'Anonymous', value: 'anonymous'},
    {label: 'Consultation', value: 'consultation'}
  ]
};

const listViewItemsOption = {
  multiple: true,
  enableSorts: true,
  data: [
    {label: 'Title', value: 'title'},
    {label: 'Content', value: 'content'},
    {label: 'Tag', value: 'tag'},
    {label: 'User Name', value: 'userName'},
    {label: 'Created On', value: 'createOn'},
    {label: 'Views', value: 'views'},
    {label: 'Modifled On', value: 'modifiedOn'},
    {label: 'Nickname', value: 'nickname'},
    {label: 'User ID', value: 'userid'},
    {label: 'Votes', value: 'votes'},
    {label: 'Blames', value: 'blames'},
    {label: 'Thumbnail', value: 'thumbnail'},
    {label: 'Summary', value: 'summary'},
  ]
};

const listSortOption = {
  data: listViewItemsOption.data
};

const sortOrderOption = {
  hasAny: false,
  hasNone: false,
  data: [
    {label: 'Ascendng', value: 'asc'},
    {label: 'Descending', value: 'desc'},
  ]
};

const fields: TFormField[] = [
  { section: 1, type: FieldType.TextField, name: 'title', label: 'Title', required: true },
  { section: 1, type: FieldType.TextArea, name: 'header', label: 'Header Text', required: false },
  { section: 1, type: FieldType.TextArea, name: 'footer', label: 'Footer Text', required: false },
  { section: 2, type: FieldType.Select, name: 'type', label: 'Board Type', required: true, options: boardTypeOption},
  { section: 2, type: FieldType.List, name: 'listViewItems', label: 'List Setting', required: true, options: listViewItemsOption},
  { section: 2, type: FieldType.Select, name: 'listSort', label: 'Sorting Type', required: true, options: listSortOption },
  { section: 2, type: FieldType.Select, name: 'sortOrder', label: 'Sort Order', required: true, options: sortOrderOption },
  { section: 2, type: FieldType.Checkbox, name: 'excludeNoticeFlag', label: 'Exclude Notices', required: true },
  { section: 3, type: FieldType.Custom, name: 'categories', label: 'Category', required: true },
];

const initialValues = {
  title: '',
  header: '',
  footer: '',
  type: 'default',
  listViewItems: ['title', 'userName', 'createOn', 'views'],
  listSort: 'modifiedOn',
  sortOrder: 'desc',
  excludeNoticeFlag: 'false',
  categories: [],
};

interface IBoardFormValue {
  title: string; // Required field
  header?: string | null; // Optional field, can be null
  footer?: string | null; // Optional field, can be null
  type: 'default' | 'anonymous' | 'consultation'; // Must match one of the boardTypeOption values
  listViewItems: Array<
    'title' | 'content' | 'tag' | 'userName' | 'createOn' | 'views' | 'modifiedOn' | 'nickname' | 'userid' | 'votes' | 'blames' | 'thumbnail' | 'summary'
  >; // Required, array of predefined values
  listSort: 'title' | 'content' | 'tag' | 'userName' | 'createOn' | 'views' | 'modifiedOn' | 'nickname' | 'userid' | 'votes' | 'blames' | 'thumbnail' | 'summary'; // Required, must match listSortOption values
  sortOrder: 'asc' | 'desc'; // Required, must match sortOrderOption values
  excludeNoticeFlag: string; // Required, must be boolean
  categories?: string[] | null; // Optional field, can be null
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  header: Yup.string().nullable(), // Optional field
  footer: Yup.string().nullable(), // Optional field
  type: Yup.string()
    .oneOf(boardTypeOption.data.map(option => option.value), 'Invalid board type')
    .required('Board Type is required'),
  listViewItems: Yup.array()
    .of(Yup.string().oneOf(listViewItemsOption.data.map(option => option.value)))
    .min(1, 'At least one List View Item must be selected')
    .required('List Setting is required'),
  listSort: Yup.string()
    .oneOf(listSortOption.data.map(option => option.value), 'Invalid sorting type')
    .required('Sorting Type is required'),
  sortOrder: Yup.string()
    .oneOf(sortOrderOption.data.map(option => option.value), 'Invalid sort order')
    .required('Sort Order is required'),
  excludeNoticeFlag: Yup.string()
    .oneOf(['true','false'])
    .required('Exclude Notices is required'),
  categories: Yup.array().nullable(), // Optional field,
});

const Add = () => {
  const navigate = useNavigate();
  
  const onSubmit = async (values: unknown) => {
    try {
      // Validate against the Yup schema
      await validationSchema.validate(values, { abortEarly: false });

      const formBoardValue = values as IBoardFormValue;

      // Proceed with submission logic
      const newBoard = {
        title: formBoardValue.title || null, 
        header: formBoardValue.header || null,
        footer: formBoardValue.footer || null,
        listViewItems: formBoardValue.listViewItems || null,
        listSort: formBoardValue.listSort
          ? {
            item: formBoardValue.listSort,
            sort: formBoardValue.sortOrder as SortOrder,
          }
          : null,
        excludeNoticeFlag:
          formBoardValue.excludeNoticeFlag === 'true',
        type: formBoardValue.type as BoardType,
      } as CreateBoardInput;
  
      await GraphqlQueryCreateBoard(newBoard);

      navigate('/admin/board/list');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // ShowToast for each error
        err.inner.forEach((error) => {
          showToast(error.message, 'error');
        });
        // You can display errors here if needed
      } else {
        console.log(err);
      }
    }
  };

  const formBuilderProps = {
    variant: FormVariant.LabelOnLeft,
    initialValues,
    onSubmit,
    sections,
    fields,
  };

  return (
    <Box>
      <Box>
        <h1>Create New Board</h1>
      </Box>      
      <Divider/>
      <FormBuilder {...formBuilderProps}/>
    </Box>
  );
};

export default Add;