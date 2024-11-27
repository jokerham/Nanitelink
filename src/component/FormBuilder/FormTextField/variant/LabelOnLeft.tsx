import { Box } from '@mui/material';
import { FlexBox, FlexRowBox } from 'component/CustomMaterialUI';
import { TFormFieldProps } from 'component/FormBuilder';
import { MUIDefault } from './MUIDefault';

export const LabelOnLeft = (props: TFormFieldProps) => {
  return (
    <FlexRowBox sx={{gap: 1}}>
      <Box sx={{flex: '1', textAlign: 'right', alignContent: 'center'}}>
        {props.field.label}
      </Box>
      <FlexBox sx={{flex: '5'}}>
        <MUIDefault {...props} />
      </FlexBox>
    </FlexRowBox>
  );
};