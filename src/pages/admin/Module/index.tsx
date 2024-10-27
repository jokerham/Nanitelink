import { useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { GraphqlQueryListDocuments } from 'function/amplify/graphqlQueries';
import { NavLink } from 'react-router-dom';

interface IDocument {
  id: string
  title?: string | null
  url?: string
}

interface IModules {
  id: string
  module: string
  name: string
  url: string
}

const Module = () => {
  const [filter, setFilter] = useState('all');
  const [modules, setModules] = useState<IModules[]>([]);

  useEffect(() => {
    const amplifyGetModule = async() => {
      const result = await GraphqlQueryListDocuments();
      const modules = result.map((document: IDocument) => {
        return {
          id: document.id,
          module: 'Page',
          name: document.title ?? '',
          url: `/page/${document.id}`
        };
      });
      setModules(modules);
    };

    amplifyGetModule();
  }, []);

  const onChangeFilterHandler = (event: React.MouseEvent<HTMLElement>, newFilter: string) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Box>
      <h1>Modules</h1>
      <Divider />
      <Toolbar variant="dense" sx={{ displya: 'flex', justifyContent: 'space-between', px: { sm: 0 } }}>
        <ToggleButtonGroup exclusive size="small" value={filter} onChange={onChangeFilterHandler}>
          <ToggleButton value="all">All Modules</ToggleButton>
          <ToggleButton value="admin">Board</ToggleButton>
          <ToggleButton value="approved">Link</ToggleButton>
          <ToggleButton value="rejected">Page</ToggleButton>
        </ToggleButtonGroup>
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
              <TableCell>Id</TableCell>
              <TableCell>Module</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {modules?.map((module: IModules) => (
              <TableRow key={module.id}>
                <TableCell>{module.id}</TableCell>
                <TableCell>{module.module}</TableCell>
                <TableCell>{module.name}</TableCell>
                <TableCell><NavLink to={module.url}>Link</NavLink></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box >
  );
};

export default Module;
