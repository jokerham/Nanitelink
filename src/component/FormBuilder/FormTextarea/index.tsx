import { Box } from '@mui/material';
import { Field } from 'formik';
import { FormVariant, TFieldVariantProp, TFieldProp } from '../types';
import { FlexBox, FlexRowBox, TextArea } from 'component/CustomMaterialUI';

const MUIDefault = (props: TFieldProp) => {
  return (
    <Field 
      as={TextArea} 
      sx={{ Multiline: 'true' }}
      {...props} />
  );
};

const LabelOnLeft = (props: TFieldProp) => {
  const {label, ...fieldProps} = props;  
  return (
    <FlexRowBox sx={{gap: 1}}>
      <Box sx={{flex: '1', textAlign: 'right', alignContent: 'center', height: '37px'}}>
        {label}
      </Box>
      <FlexBox sx={{flex: '5'}}>
        <Field 
          as={TextArea} 
          size='small'
          sx={{ multiline: 'true', rows: 4, width: '100%' }}
          {...fieldProps} />
      </FlexBox>
    </FlexRowBox>
  );
};

const FormTextarea = (props: TFieldVariantProp) => {
  const {variant, ...fieldProps} = props;
  switch (variant){
  case FormVariant.MUIDefault:
    return ( <MUIDefault {...fieldProps} /> );
  case FormVariant.LabelOnLeft:
    return ( <LabelOnLeft {...fieldProps} /> );
  }
};

export default FormTextarea;
