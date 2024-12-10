import { TFormFieldProps, ICustomField } from 'component/FormBuilder';
import { Field } from 'formik';

export const MUIDefault = ({ field, formik }: TFormFieldProps) => {
  const { name, required } = field;
  const { values, handleChange, handleBlur } = formik;
  const customField = field as ICustomField;
  const component = customField.options.component;
  const value = values[name];

  return (
    <Field 
      as={component} 
      id={name}
      name={name}
      value={value}
      required={required}
      onChange={handleChange}
      onBlur={handleBlur}
      sx={{ Multiline: 'true', width: '100%' }}
    />
  );
};
