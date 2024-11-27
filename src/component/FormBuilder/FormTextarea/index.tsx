import { FormVariant, TFormFieldProps } from '../types';
import { MUIDefault } from './variant/MUIDefault';
import { LabelOnLeft } from './variant/LabelOnLeft';

export const FormTextarea = (props: TFormFieldProps) => {
  const {variant} = props;
  switch (variant){
  case FormVariant.MUIDefault:
    return ( <MUIDefault {...props} /> );
  case FormVariant.LabelOnLeft:
    return ( <LabelOnLeft {...props} /> );
  }
};
