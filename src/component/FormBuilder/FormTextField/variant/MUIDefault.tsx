import { TextField } from '@mui/material';
import { TFormFieldProps } from 'component/FormBuilder';
import { Field } from 'formik';

export const MUIDefault = ({ field, formik }: TFormFieldProps) => {
  const { name, required } = field;
  const { values, handleChange, handleBlur } = formik;

  return (
    <Field
      as={TextField}
      id={name}
      name={name}
      value={values[name]}
      required={required}
      onChange={handleChange}
      onBlur={handleBlur}
      size="small"
      sx={{ width: '100%' }}
    />
  );
};