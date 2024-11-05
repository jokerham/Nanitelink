import { Box, Button, ButtonGroup, Checkbox, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material';
import { toLocalDate } from 'function/amplify/awsDate';
import { GraphqlQueryListAllBoards } from 'function/amplify/graphqlQueries';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

interface IBoardTable {
  id: string,
  title: string,
  type: string,
  createdAt: string
}

const List = () => {
  const [boards, setBoards] = useState<IBoardTable[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPages = async() => {
      const fetchedBoards = await GraphqlQueryListAllBoards();
      const boardsToSet = fetchedBoards.map((board) => {
        return {
          id: board.id,
          title: board.title ?? '',
          type: board.type,
          createdAt: board.createdAt
        };
      });
      setBoards(boardsToSet);
    };
    fetchPages();
  }, []);

  return (
    <Box>
      <Box>
        <h1>List of Boards</h1>
      </Box>      
      <Divider />
      <Toolbar variant="dense" sx={{ displya: 'flex', justifyContent: 'space-between', px: { sm: 0 } }}>
        <ButtonGroup>
          <Button size="medium" variant="contained" onClick={() => (navigate('/admin/board/add'))}><Box>Add</Box></Button>
          <Button size="medium" variant="contained"><Box>Modify</Box></Button>
          <Button size="medium" variant="contained"><Box>Delete</Box></Button>
        </ButtonGroup>
      </Toolbar>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{paddingY: 0}}><Checkbox/></TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align='center' >Created At</TableCell>
              <TableCell align='center' >Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {boards?.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1)).map((board) => (
              <TableRow key={board.id}>
                <TableCell sx={{paddingY: 0}}><Checkbox/></TableCell>
                <TableCell>{board.title}</TableCell>
                <TableCell>{board.type}</TableCell>
                <TableCell align='center' >{toLocalDate(board.createdAt)}</TableCell>
                <TableCell align='center' sx={{paddingY: 0}}>
                  <NavLink to={`/board/${board.id}`}>
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