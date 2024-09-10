import TabView from 'component/TabView';
import { SiteMenuTreeNode } from './SiteMenuTreeNode';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listModules } from 'graphql/queries';
import { JsonObjectExpression } from 'typescript';

interface SiteMenuAddViewProps {
  menuNode?: SiteMenuTreeNode;
  onClose: () => void;
}

type TModuleList = {
  id: string;
  name: string;
  parameters: JsonObjectExpression;
}

const SiteMenuAddView = (props: SiteMenuAddViewProps) => {
  const { menuNode, onClose} = props;
  const [moduleList, setModuleList] = useState<TModuleList[]>([]);
  const [module, setModule] = useState('');

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
            parameters: item.parameters ? JSON.parse(item.parameters) : {}
          };
        });
        setModuleList(modules);
      }
    };

    fetchModules();
  }, []);

  const handleModuleSelectChange = (event: SelectChangeEvent) => {
    setModule(event.target.value);
  };

  return (
    <TabView title='Add Menu' closeable onClose={onClose}>
      <section className='NL_admin_menu_section'>
        <FormControl size='small'>
          <TextField
            required
            id="menu-name"
            label="Menu Name"
            size="small"
          />
        </FormControl>
        <FormControl size='small'>
          <InputLabel id="module-label">Module</InputLabel>
          <Select
            labelId="module-label"
            id="module-helper"
            value={module}
            label="Module"
            onChange={handleModuleSelectChange}
          >
            {
              moduleList.map(item => {
                return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>;
              })
            }
          </Select>
        </FormControl>
      </section>
    </TabView>
  );
};

export default SiteMenuAddView;