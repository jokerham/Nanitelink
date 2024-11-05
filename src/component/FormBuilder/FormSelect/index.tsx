import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Field } from 'formik';
import { FormVariant, TFieldVariantProp, TFieldProp } from '../types';
import { FlexBox, FlexRowBox } from 'component/CustomMaterialUI';

type OptionItem = { [key: string]: string };

const MUIDefault = (props: TFieldProp) => {
  const {options, ...fieldProps} = props;
  const id = fieldProps.id;
  const label = fieldProps.label;
  
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id={`LabelHelper_${id}`}>{label}</InputLabel>
      <Field 
        as={Select}
        {...fieldProps}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {(options?.data as OptionItem[] || []).map((item: OptionItem) => {
          const [optionValue, optionLabel] = Object.entries(item)[0];
          return (
            <MenuItem key={optionValue} value={optionLabel}>
              {optionLabel}
            </MenuItem>
          );
        })}
      </Field>
    </FormControl>
  );
};

const LabelOnLeft = (props: TFieldProp) => {
  const {label, options, ...fieldProps} = props;

  return (
    <FlexRowBox sx={{gap: 1}}>
      <Box sx={{flex: '1', textAlign: 'right', alignContent: 'center', height: '37px'}}>
        {label}
      </Box>
      <FlexBox sx={{flex: '5'}}>
        <FormControl sx={{ width: '100%' }}>
          <Field
            as={Select}
            {...fieldProps}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {(options?.data as OptionItem[] || []).map((item: OptionItem) => {
              const [optionValue, optionLabel] = Object.entries(item)[0];
              return (
                <MenuItem key={optionValue} value={optionValue}>
                  {optionLabel}
                </MenuItem>
              );
            })}
          </Field>
        </FormControl>
      </FlexBox>
    </FlexRowBox>
  );
};

const FormSelect = (props: TFieldVariantProp) => {
  const {variant, ...fieldProps} = props;
  switch (variant){
  case FormVariant.MUIDefault:
    return ( <MUIDefault {...fieldProps} /> );
  case FormVariant.LabelOnLeft:
    return ( <LabelOnLeft {...fieldProps} /> );
  }
};

export default FormSelect;
