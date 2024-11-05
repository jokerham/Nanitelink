import { Box, Divider } from '@mui/material';
import { FormBuilder, TFormField, FormVariant, FieldType } from 'component/FormBuilder';

const add = () => {
  const initialValues = {
    title: '',
    header: '',
    footer: '',
    type: 'Default',
    listViewItems: '',
    listSort: '',
    excludeNoticeFlag: 'false',
    categories: [],
  };

  const onSubmit = (values: unknown) => {
    console.log(values);
  };

  const sections = [
    {seq: 1, label: 'Basic Setting'},
    {seq: 2, label: 'Advanced Setting'},
    {seq: 3, label: 'Category Setting'},
  ];

  const fields: TFormField[] = [
    { section: 1, type: FieldType.TextField, name: 'title', label: 'Title', required: true },
    { section: 1, type: FieldType.TextArea, name: 'header', label: 'Header Text', required: false },
    { section: 1, type: FieldType.TextArea, name: 'footer', label: 'Footer Text', required: false },
    { section: 2, type: FieldType.Select, name: 'type', label: 'Board Type', required: true, options: {
      data: [{default: 'Default'},{anonymous: 'Anonymous'},{consultation: 'consultation'}]
    } },
    { section: 2, type: FieldType.Select, name: 'listViewItems', label: 'List Setting', required: true, options: {
      data: [{default: 'Default'},{anonymous: 'Anonymous'},{consultation: 'consultation'}]
    } },
    { section: 2, type: FieldType.Select, name: 'listSort', label: 'Sorting Type', required: true },
    { section: 2, type: FieldType.Checkbox, name: 'excludeNoticeFlag', label: 'Exclude Notices', required: true },
    { section: 3, type: FieldType.Custom, name: 'categories', label: 'Category', required: true },
  ];

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

export default add;