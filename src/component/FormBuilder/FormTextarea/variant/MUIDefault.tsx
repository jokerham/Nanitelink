import { TextArea } from 'component/CustomMaterialUI';
import { TFormFieldProps } from 'component/FormBuilder';
import { Field } from 'formik';

export const MUIDefault = ({ field, formik }: TFormFieldProps) => {
  const { name, required } = field;
  const { values, handleChange, handleBlur } = formik;

  return (
    <Field 
      as={TextArea} 
      id={name}
      name={name}
      value={values[name]}
      required={required}
      onChange={handleChange}
      onBlur={handleBlur}
      sx={{ Multiline: 'true', width: '100%' }}
    />
  );
};
