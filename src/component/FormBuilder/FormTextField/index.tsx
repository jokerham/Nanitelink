import { FormVariant, TFormFieldProps } from '../types';
import { LabelOnLeft } from './variant/LabelOnLeft';
import { MUIDefault } from './variant/MUIDefault';

export const FormTextField = (props: TFormFieldProps) => {
  switch (props.variant){
  case FormVariant.MUIDefault:
    return ( <MUIDefault {...props} /> );
  case FormVariant.LabelOnLeft:
    return ( <LabelOnLeft {...props} /> );
  }
};
