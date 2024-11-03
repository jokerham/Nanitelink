import { useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Checkbox } from '@mui/material';
import { GraphqlQueryListAllModules } from 'function/amplify/graphqlQueries';

interface IModules {
  id: string
  name: string
  createdAt: string
  parameters?: {
    items: ({
      label: string
    } | null)[]
  } | null
}

const Module = () => {
  const [modules, setModules] = useState<IModules[]>([]);

  useEffect(() => {
    const fetchModules = async () => {
      const modules = await GraphqlQueryListAllModules();
      setModules(modules);
    };
    fetchModules();
  }, []);

  return (
    <Box>
      <h1>Modules</h1>
      <Divider />
      <Toolbar variant="dense" sx={{ displya: 'flex', justifyContent: 'space-between', px: { sm: 0 } }}>
        <ButtonGroup>
          <Button size="medium" variant="contained"><Box>Add</Box></Button>
          <Button size="medium" variant="contained"><Box>Modify</Box></Button>
          <Button size="medium" variant="contained"><Box>Delete</Box></Button>
        </ButtonGroup>
      </Toolbar>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Checkbox/></TableCell>
              <TableCell>Module</TableCell>
              <TableCell>Parameters</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {modules?.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1)).map((module: IModules) => (
              <TableRow key={module.id}>
                <TableCell><Checkbox/></TableCell>
                <TableCell>{module.name}</TableCell>
                <TableCell>{module.parameters?.items?.join(' / ')}</TableCell>
                <TableCell>{module.createdAt.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box >
  );
};

export default Module;

/**
 * Following code is a sample of getting GraphQl Query dynamically.
 * 
 * 
 * 

  type GraphqlQueryFunction = (props?: unknown) => Promise<unknown>;

  interface IModuleItem {
    id: string
    title: string
    createdAt: Date
  }

  const capitalizeFirstLetter = (text: string) => {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  useEffect(() => {
    const getModuleList = async() => {
      const modules = await Q.GraphqlQueryListAllModules();
      // Step 1: Use Promise.all to handle async map
      const allModulesItems = await Promise.all(
        modules.map(async (module) => {
          const queryName = `GraphqlQueryListAll${capitalizeFirstLetter(module.name)}s`;
          const query = Q[queryName as keyof typeof Q] as GraphqlQueryFunction;

          if (typeof query === 'function') {
            const moduleItemList = await query() as IModuleItem[];

            // Step 2: Map module items to IModules format
            return moduleItemList.map((item) => ({
              id: item.id,
              module: module.name,
              title: item.title,
              createdAt: item.createdAt,
              url: `/${module.name.toLowerCase()}/${item.id}`,
            }));
          }
          return [];
        })
      );

      // Step 3: Flatten and set module list
      setModules(allModulesItems.flat());
    };
    getModuleList();
  }, []);

  const onChangeFilterHandler = (event: React.MouseEvent<HTMLElement>, newFilter: string) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };
 */