import { Box, Button, ButtonGroup, Checkbox, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material';
import { toLocalDate } from 'function/amplify/awsDate';
import { GraphqlQueryListAllPages } from 'function/amplify/graphqlQueries';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface IPageTable {
  id: string,
  title: string,
  createdAt: string
}

const List = () => {
  const [pages, setPages] = useState<IPageTable[]>([]);

  useEffect(() => {
    const fetchPages = async() => {
      const fetchedPages = await GraphqlQueryListAllPages();
      const pagesToSet = fetchedPages.map((page) => {
        return {
          id: page.id,
          title: page.title ?? '',
          createdAt: page.createdAt
        };
      });
      setPages(pagesToSet);
    };
    fetchPages();
  }, []);

  return (
    <Box>
      <Box>
        <h1>List of Pages</h1>
      </Box>      
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
              <TableCell sx={{paddingY: 0}}><Checkbox/></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align='center' >Created At</TableCell>
              <TableCell align='center' >Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pages?.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1)).map((page) => (
              <TableRow key={page.id}>
                <TableCell sx={{paddingY: 0}}><Checkbox/></TableCell>
                <TableCell>{page.id}</TableCell>
                <TableCell>{page.title}</TableCell>
                <TableCell align='center' >{toLocalDate(page.createdAt)}</TableCell>
                <TableCell align='center' sx={{paddingY: 0}}>
                  <NavLink to={`/page/${page.id}`}>
                    <Button variant='contained' size='small' sx={{marginY: 0}}>
                      Link
                    </Button>
                  </NavLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default List;