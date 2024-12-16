import { Formik, Form } from 'formik';
import { Box, Button } from '@mui/material';
import { FlexColumnBox } from 'component/CustomMaterialUI';
import { showToast } from 'function/showToast';
import { FormVariant, TFormBuilderProps} from './types';
import { Sections } from './Sections';
import { FormField } from './FormField';
export * from './types';

export const FormBuilder = (props: TFormBuilderProps) => {
  const { initialValues, onSubmit, fields, variant: givenVariant, sections } = props;
  const variant = givenVariant || FormVariant.MUIDefault;

  const onMouseEnterHandler = () => {
    const inputElement = document.activeElement as HTMLInputElement;
    if (inputElement) {
      inputElement.blur();
    }
  };

  const onClickHandler = (isSubmitting: boolean, handleSubmit: { (e?: React.FormEvent<HTMLFormElement>): void; (): void; }) => {
    isSubmitting ?
      showToast('In process of saving. Please wait.', 'warning') :
      handleSubmit();
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={onSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
        <Form>
          <FlexColumnBox sx={{gap: 1, m: 1}}>
            {sections && sections.map((section, key) => (
              <Sections
                key={key}
                variant={variant}
                formik={{values, handleChange, handleBlur, setFieldValue}}
                section={section}
                fields={fields.filter(field => field.section === section.seq)} />
            ))}

            {!sections &&
              fields.map((field, key) => {
                return (
                  <FormField
                    key={key}
                    variant={variant}
                    formik={{values, handleChange, handleBlur, setFieldValue}}
                    field={field} />
                );
              })}

            <Box className="NL_admin_menu_action">
              <Button variant="contained"
                onMouseEnter={onMouseEnterHandler}
                onClick={() => onClickHandler(isSubmitting, handleSubmit)}>
                Save
              </Button>
            </Box>
          </FlexColumnBox>
        </Form>
      )}
    </Formik>
  );
};
