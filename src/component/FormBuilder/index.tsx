import { Formik, Form } from 'formik';
import { Box, Button, Divider } from '@mui/material';
import { FlexColumnBox } from 'component/CustomMaterialUI';
import { showToast } from 'function/showToast';
import { FormVariant, FieldType, TFormBuilderProps, TRenderFieldProps} from './types';
import FormTextField from './FormTextField';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';

export * from './types';

export const FormBuilder = (props: TFormBuilderProps) => {
  const { initialValues, onSubmit, fields, variant: givenVariant, sections } = props;
  const variant = givenVariant || FormVariant.MUIDefault;
  
  const renderField = (props: TRenderFieldProps) => {
    const { field, values, handleChange: onChange, handleBlur: onBlur } = props;
    const { name: id, name, label, required, options, custom } = field;
    const value = values[name] ?? '';
    const fieldProps = { variant, id, name, label, ...(required && {required}), value, onChange, onBlur, options, custom };

    switch (field.type) {
    case FieldType.TextField:
      return <FormTextField {...fieldProps} />;
    case FieldType.TextArea:
      return <FormTextarea {...fieldProps} />;
    case FieldType.Select:
      return <FormSelect {...fieldProps} />;
    // Add cases for other field types as needed
    default:
      return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form>
          <FlexColumnBox sx={{gap: 1, m: 1}}>
            {sections && sections.map((section) => (
              <Box key={section.seq}>
                <h2>{section.label}</h2>
                <Divider/>
                <FlexColumnBox sx={{ gap: 1, m: 1 }}>
                  {
                    fields
                      .filter((field) => field.section === section.seq)
                      .map((field, key) => {
                        const fieldProps = { field, values, handleChange, handleBlur };
                        return <div key={key}>{renderField(fieldProps)}</div>;
                      })
                  }
                </FlexColumnBox>
              </Box>
            ))}

            {!sections &&
              fields.map((field, key) => {
                const fieldProps = { field, values, handleChange, handleBlur };
                return <div key={key}>{renderField(fieldProps)}</div>;
              })}

            <Box className="NL_admin_menu_action">
              <Button variant="contained" onClick={
                isSubmitting ?
                  () => showToast('In process of saving. Please wait.', 'warning') :
                  () => handleSubmit()}>
                Save
              </Button>
            </Box>
          </FlexColumnBox>
        </Form>
      )}
    </Formik>
  );
};
