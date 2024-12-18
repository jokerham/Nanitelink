import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Box } from '@mui/material';
import { ClassicEditor } from 'ckeditor5';
import { CKEditorConfig } from './config';
import { TOnChangeHandler } from 'component/FormBuilder';
import { Field, useFormikContext } from 'formik';

interface ICKEditorTemplateProps {
  value: string;
  name: string;
  onChange: TOnChangeHandler
}

export const CKEditorTemplate = (props: ICKEditorTemplateProps) => {
  const { setFieldValue } = useFormikContext<unknown>();
  const { value, name, onChange } = props;
  const content = value;
  const setContent = (content: string) => {
    setFieldValue(name, content);
  };
  
  return (
    <Box sx={{marginBottom: '-10px', padding: 0, height: '450px', width: '100%'}}>
      <Field type='hidden' id={name} value={name} onChange={onChange} />
      <CKEditor 
        id='editor'
        editor={ ClassicEditor }
        config={ CKEditorConfig }
        data={content}
        onChange={(event, editor) => { setContent( editor.getData() ); }}
      />
    </Box>
  );
};