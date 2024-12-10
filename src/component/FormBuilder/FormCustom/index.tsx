import { FormVariant, TFormFieldProps } from 'component/FormBuilder';
import { LabelOnLeft, MUIDefault } from './variant';

export const FormCustom = (props: TFormFieldProps) => {
  const {variant} = props;
  switch (variant){
  case FormVariant.MUIDefault:
    return ( <MUIDefault {...props} /> );
  case FormVariant.LabelOnLeft:
    return ( <LabelOnLeft {...props} /> );
  }
};
