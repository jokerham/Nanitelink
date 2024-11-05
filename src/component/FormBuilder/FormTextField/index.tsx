import { Box, TextField } from '@mui/material';
import { Field } from 'formik';
import { FormVariant, TFieldVariantProp, TFieldProp } from '../types';
import { FlexBox, FlexRowBox } from 'component/CustomMaterialUI';

const MUIDefault = (props: TFieldProp) => {
  return (
    <Field 
      as={TextField} 
      size='small'
      sx={{width: '100%'}} 
      {...props} />
  );
};

const LabelOnLeft = (props: TFieldProp) => {
  const {label, ...fieldProps} = props;
  return (
    <FlexRowBox sx={{gap: 1}}>
      <Box sx={{flex: '1', textAlign: 'right', alignContent: 'center'}}>
        {label}
      </Box>
      <FlexBox sx={{flex: '5'}}>
        <Field 
          as={TextField} 
          size='small'
          sx={{width: '100%'}} 
          { ...fieldProps } />
      </FlexBox>
    </FlexRowBox>
  );
};

const FormTextField = (props: TFieldVariantProp) => {
  const {variant, ...fieldProps} = props;
  switch (variant){
  case FormVariant.MUIDefault:
    return ( <MUIDefault {...fieldProps} /> );
  case FormVariant.LabelOnLeft:
    return ( <LabelOnLeft {...fieldProps} /> );
  }
};

export default FormTextField;
