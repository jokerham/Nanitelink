import TabView from 'component/TabView';
import { SiteMenuTreeNode } from './SiteMenuTreeNode';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField, FormLabel, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listModules } from 'graphql/queries';
import { TfiSave } from 'react-icons/tfi';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';

interface SiteMenuAddViewProps {
  menuNode?: SiteMenuTreeNode;
  onClose: (reload: boolean) => void;
}

type TModule = {
  id: string
  name: string
  parameters: TParameter[]
}

type TParameter = {
  id: string
  inputType: string
  label: string
  defaultValue: string
  optionValues?: TOptionValue[]
}

type TOptionValue = {
  value: string
  label: string
}

type TParameterValue = {
  id: string
  value: string
}

interface IFormValues {
  module: string;
  menuName: string;
  menuUrl: string;
  parameters: TParameterValue[];
}

const SiteMenuAddView = (props: SiteMenuAddViewProps) => {
  const { menuNode, onClose} = props;
  const [moduleList, setModuleList] = useState<TModule[]>([]);
  const [module, setModule] = useState('');
  const [moduleParameters, setModuleParameters] = useState<TParameter[]>([]);

  useEffect(() => {
    const fetchModules = async() => {
      const client = generateClient();
      const result = await client.graphql({
        query: listModules
      });
      if (result.data?.listModules?.items ) {
        const modules = result.data.listModules.items.map(item => {
          return {
            id: item.id,
            name: item.name,
            parameters: (item.parameters ? item.parameters.map(parameter => {
              return {
                id: parameter?.id,
                inputType: parameter?.inputType,
                label: parameter?.label,
                defaultValue: parameter?.defaultValue,
                optionValues: (parameter?.optionValues ? parameter?.optionValues.map(option => {
                  return {
                    value: option?.value,
                    label: option?.label
                  } as TOptionValue;
                }) : []) as TOptionValue[]
              } as TParameter;
            }) : []) as TParameter[]
          };
        });
        setModuleList(modules);
      }
    };

    fetchModules();
  }, []);

  const handleOnClose = () => {
    onClose(false);
  };

  useEffect(() => {
    const getParametersById = (moduleList: TModule[], moduleId: string): TParameter[] => {
      const module = moduleList.find(item => item.id === moduleId);
      return module?.parameters || [];
    };
    setModuleParameters(getParametersById(moduleList, module));
  }, [module, moduleList]);

  const initialValues: IFormValues = {
    module: '',
    menuName: '',
    menuUrl: '',
    parameters: moduleParameters.map(param => ({
      id: param.id,
      value: param.defaultValue || ''
    }))
  };

  const validationSchema = Yup.object({
    module: Yup.string().required('Module is required'),
    menuName: Yup.string().required('Menu Name is required'),
    menuUrl: Yup.string().required('Menu URL is required')
  });

  const handleOnSubmit = (values: IFormValues) => {
    console.log(values);
  };
  
  return (
    <TabView title='Add Menu' closeable onClose={handleOnClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
      >
        {({values, setFieldValue}) => (
          <Form className="NL_flex_column">
            <section className='NL_admin_menu_section'>
              <FormControl size='small' margin={'dense'}>
                <InputLabel id="module-label">Module</InputLabel>
                <Field
                  as={Select}
                  labelId="module-label"
                  id="module"
                  name="module"
                  label="Module"
                  value={values.module}
                  onChange={(e: SelectChangeEvent) => {
                    setFieldValue('module', e.target.value);
                    setModule(e.target.value);
                  }}
                >
                  {
                    moduleList.map(item => {
                      return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>;
                    })
                  }
                </Field>
              </FormControl>
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
                moduleParameters.map((item) => {
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

export default SiteMenuAddView;