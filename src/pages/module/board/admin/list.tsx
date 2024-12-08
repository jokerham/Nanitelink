import { Box, Button, ButtonGroup, Checkbox, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material';
import { toLocalDate } from 'function/amplify/awsDate';
import { GraphqlQueryDeleteBoard, GraphqlQueryListAllBoards } from 'function/amplify/graphqlQueries';
import { showToast } from 'function/showToast';
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
  const [selectedRows, setSelectedRows] = useState<string[]>([]); // State to track selected rows

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

  const onClickAddHandler = () => {
    navigate('/admin/board/add');
  };

  const onClickDeleteHandler = async () => {
    try {
      // Perform all delete operations in parallel
      await Promise.all(
        selectedRows.map(async (rowId) => {
          await GraphqlQueryDeleteBoard({id: rowId}); // Assume this deletes a board by ID
          setBoards((prevBoards) => prevBoards.filter((board) => board.id !== rowId));
        })
      );
  
      // Clear selected rows after deletion
      setSelectedRows([]);
      showToast('Selected boards deleted successfully', 'success');
    } catch (err) {
      showToast('Failed to delete one or more boards', 'error');
      console.error(err);
    }
  };

  // Handle individual checkbox toggle
  const handleCheckboxChange = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((rowId) => rowId !== id) // Deselect if already selected
        : [...prev, id] // Add to selected rows
    );
  };
  
  // Check if all rows are selected
  const areAllRowsSelected = boards.length > 0 && selectedRows.length === boards.length;

  // Handle "Select All" checkbox toggle
  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setSelectedRows(isChecked ? boards.map((board) => board.id) : []);
  };

  return (
    <Box>
      <Box>
        <h1>List of Boards</h1>
      </Box>      
      <Divider />
      <Toolbar variant="dense" sx={{ displya: 'flex', justifyContent: 'space-between', px: { sm: 0 } }}>
        <ButtonGroup>
          <Button size="medium" variant="contained" onClick={onClickAddHandler}><Box>Add</Box></Button>
          <Button size="medium" variant="contained" disabled={selectedRows.length != 1}><Box>Modify</Box></Button>
          <Button size="medium" variant="contained" onClick={onClickDeleteHandler} disabled={selectedRows.length === 0}><Box>Delete</Box></Button>
        </ButtonGroup>
      </Toolbar>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{paddingY: 0}}>
                <Checkbox
                  checked={areAllRowsSelected}
                  indeterminate={selectedRows.length > 0 && !areAllRowsSelected}
                  onChange={handleSelectAllChange}/>
              </TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align='center' >Created At</TableCell>
              <TableCell align='center' >Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {boards?.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1)).map((board) => (
              <TableRow key={board.id}>
                <TableCell sx={{paddingY: 0}}>
                  <Checkbox
                    checked={selectedRows.includes(board.id)}
                    onChange={() => handleCheckboxChange(board.id)}/>
                </TableCell>
                <TableCell>{board.title}</TableCell>
                <TableCell>{board.type}</TableCell>
                <TableCell align='center' >{toLocalDate(board.createdAt)}</TableCell>
                <TableCell align='center' sx={{paddingY: 0}}>
                  <NavLink to={`/board/${board.title}`}>
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

function foreach(selectedRows: string[], arg1: (rowId: any) => void) {
  throw new Error('Function not implemented.');
}
