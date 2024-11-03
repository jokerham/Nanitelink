import TabView from 'component/TabView';
import { SiteMenuTreeNode, TParameter, TParameterValue } from './SiteMenuTreeNode';
import { Formik, Form, Field } from 'formik';
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from '@mui/material';
import { IGraphqlError, GraphqlQueryUpdateMenu, GraphqlQueryGetModule } from 'function/amplify/graphqlQueries';
import { TfiSave } from 'react-icons/tfi';
import { showToast } from 'function/showToast';
import { useEffect, useState } from 'react';

interface SiteMenuDetailViewProps {
  menuNode: SiteMenuTreeNode;
  onClose: () => void;
}

interface IFormValues {
  menuName: string;
  menuUrl: string;
  parameters: TParameterValue[];
}

interface IModule {
  id: string;
  name: string;
  parameters: TParameter[];
}

const SiteMenuDetailView = (props: SiteMenuDetailViewProps) => {
  const { menuNode, onClose} = props;
  const [module, setModule] = useState<IModule | undefined>();
  
  useEffect(() => {
    const amplifyGetModule = async(id: string) => {
      const module = await GraphqlQueryGetModule({id: id});
      setModule(module as unknown as IModule);
    };

    if (menuNode.module) {
      amplifyGetModule(menuNode.module);
    }
  }, [menuNode]);

  const initialValues: IFormValues = {
    menuName: menuNode.name ?? '',
    menuUrl: menuNode.url ?? '',
    parameters: menuNode.parameters ?? []
  };

  const handleOnSubmit = (values: IFormValues) => {
    const amplifyModifyMenu = async (values: IFormValues) => {
      try {
        await GraphqlQueryUpdateMenu({
          id: menuNode.id,
          menuName: values.menuName,
          menuUrl: values.menuUrl,
        });
        showToast('Menu updated successfully', 'success');
        onClose();
      } catch (error: IGraphqlError | unknown) {
        if (typeof error === 'object' && error !== null && 'errors' in error) {
          const grapqlError = error as IGraphqlError;
          grapqlError.errors.map((error: {message: string}) => {
            showToast(error.message, 'error');
          });
        } else {
          //console.log(error);
        }
      }
    };
    //console.log(values);
    amplifyModifyMenu(values);
  };

  return (
    <TabView title='Add Menu' closeable onClose={onClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
      >
        {({values, setFieldValue}) => (
          <Form className="NL_flex_column">
            <section className='NL_admin_menu_section'>
              <FormControl size='small' required variant='outlined' margin={'dense'}>
                <Field
                  as={TextField}
                  id="menuName"
                  name="menuName"
                  label="Menu Name"
                  value={values.menuName}
                  onChange={(e: SelectChangeEvent) => setFieldValue('menuName', e.target.value)}
                  size="small"
                />
              </FormControl>
              <FormControl size='small' required variant='outlined' margin={'dense'}>
                <Field
                  as={TextField}
                  id="menuUrl"
                  name="menuUrl"
                  label="Menu Url"
                  value={values.menuUrl}
                  onChange={(e: SelectChangeEvent) => setFieldValue('menuUrl', e.target.value)}
                  size="small"
                />
              </FormControl>
              {
                (module?.parameters ?? []).map((item) => {
                  switch (item.inputType) {
                  case 'select':
                    return (
                      <FormControl key={item.id} size='small' required variant='outlined' margin={'dense'}>
                        <InputLabel id={item.id}>{item.label}</InputLabel>
                        <Field
                          as={Select}
                          labelId={item.id}
                          id={item.id}
                          name={item.id}
                          value={item.defaultValue}
                          onChange={(e: SelectChangeEvent) => setFieldValue(item.id, e.target.value)}
                          label={item.label}
                        >
                          {
                            item.optionValues?.map(option => {
                              return <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>;
                            })
                          }
                        </Field>
                      </FormControl>
                    );
                  case 'text':
                    return (
                      <FormControl key={item.id} size='small' required variant='outlined' margin={'dense'}>
                        <Field
                          as={TextField}
                          id={item.id}
                          name={item.id}
                          label={item.label}
                          size="small"
                          value={item.defaultValue}
                          onChange={(e: SelectChangeEvent) => setFieldValue(item.id, e.target.value)}
                        />
                      </FormControl>
                    );
                  case 'radio':
                    return (
                      <FormControl key={item.id} size='small' required variant='outlined' margin={'dense'}>
                        <FormLabel>{item.label}</FormLabel>
                        <Field 
                          as={RadioGroup} 
                          defaultValue={item.defaultValue}id={item.id} 
                          name={item.id}
                          onChange={(e: SelectChangeEvent) => setFieldValue(item.id, e.target.value)}>
                          {
                            item.optionValues?.map(option => {
                              return (
                                <FormControlLabel
                                  key={option.value}
                                  value={option.value}
                                  control={<Radio />}
                                  label={option.label}/>
                              );
                            })
                          }
                        </Field>
                      </FormControl>
                    );
                  case 'textarea':
                    break;
                  }
                })
              }
            </section>
            <div className="NL_admin_menu_action">
              <button type="submit">
                <TfiSave className='NL_icon' />Save Menu
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </TabView>
  );
};

export default SiteMenuDetailView;