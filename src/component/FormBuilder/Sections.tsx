import { FlexColumnBox } from 'component/CustomMaterialUI';
import { TSectionsProps } from './types';
import { Divider } from '@mui/material';
import { FormField } from './FormField';

export const Sections = (props: TSectionsProps) => {
  const { variant, section, fields, formik } = props;
  return (
    <FlexColumnBox sx={{gap: 1, m: 1}}>
      {section && ( <h2>{section.label}</h2> )}
      {section && ( <Divider /> )}

      <FlexColumnBox sx={{ gap: 1, m: 1 }}>
        {
          fields
            .map((field, key) => {
              return (
                <FormField key={key} variant={variant} formik={formik} field={field} />
              );
            })
        }
      </FlexColumnBox>
    </FlexColumnBox>
  );
};