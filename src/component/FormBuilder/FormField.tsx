import { FormList } from './FormList';
import { FormTextarea } from './FormTextarea';
import { FormTextField } from './FormTextField';
import { FormSelect } from './FormSelect';
import { FieldType, TFormFieldProps } from './types';

export const FormField = (props: TFormFieldProps) => {
  switch (props.field.type) {
  case FieldType.List:
    return <FormList {...props} />;
  case FieldType.TextField:
    return <FormTextField {...props} />;
  case FieldType.TextArea:
    return <FormTextarea {...props} />;
  case FieldType.Select:
    return <FormSelect {...props} />;
  default:
    return null;
  }
};