import { FormList } from './FormList';
import { FormTextarea } from './FormTextarea';
import { FormTextField } from './FormTextField';
import { FormSelect } from './FormSelect';
import { FormCustom } from './FormCustom';
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
  case FieldType.Custom:
    return <FormCustom {...props} />;
  default:
    return null;
  }
};