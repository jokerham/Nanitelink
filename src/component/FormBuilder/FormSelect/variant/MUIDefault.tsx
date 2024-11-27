import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { TFormFieldProps, ISelectField, FormVariant } from 'component/FormBuilder';
import { Field } from 'formik';

export const MUIDefault = ({ variant, field, formik }: TFormFieldProps) => {
  const selectField = field as ISelectField;
  const { name, label, options, required } = selectField;
  const { values, handleChange, handleBlur } = formik;
  
  return (
    <FormControl sx={{ width: '100%' }}>
      {( variant == FormVariant.MUIDefault && <InputLabel id={`${name}-label`}>{label}</InputLabel> )}
      <Field 
        as={Select}
        id={name}
        name={name}
        value={values[name]}
        required={required}
        onChange={handleChange}
        onBlur={handleBlur}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.data.map((item) => {
          const { label, value } = item;
          return (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          );
        })}
      </Field>
    </FormControl>
  );
};
