import { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from '@mui/material';
import { Board, BoardItem } from 'API';
import { GraphqlQueryGetBoardByTitle } from 'function/amplify/graphqlQueries';
import { FlexRowBox } from 'component/CustomMaterialUI';
import { IoSearch } from 'react-icons/io5';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { getUserAttributes } from 'function/amplify/auth';
import { toLocalDate } from 'function/amplify/awsDate';
import { listBoardItems } from 'function/amplify/restApiQueries';
import { Link } from 'react-router-dom';

const selectableValues = [
  {name: 'Subject', value: 'subject'},
  {name: 'Content', value: 'content'},
  {name: 'Comment', value: 'comment'},
  {name: 'Author', value: 'author'},
  {name: 'Tag', value: 'tag'}
];

const View = (props: {id?: string}) => {
  const { id } = props;
  const [board, setBoard] = useState<Board | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [searchOption, setSearchOption] = useState(selectableValues[0].value);
  const [searchText, setSearchText] = useState('');
  const [boardItems, setBoardItems] = useState<BoardItem[]>([]);
  const [userAttributes, setUserAttributes] = useState<{ [key: string]: any }>({}); // To store user attributes
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  type TListBoardItems = {
    totalPages: number,
    currentPage: number,
    rowsPerPage: number,
    items: BoardItem[]
  }

  // Fetch information of board
  useEffect(() => {
    if (id) {
      const retrieveData = async (id: string) => {
        try {
          const result = await GraphqlQueryGetBoardByTitle(id);
          setBoard(result as Board | undefined);
        } catch (error) {
          //console.log(error);
        }
      };
      retrieveData(id);
    }
  }, [id]);

  // Fetch information of board item
  useEffect(() => {
    if (board) {
      const fetchBoardItems = async () => {
        try {
          const result = await listBoardItems(board.id, page, rowsPerPage) as TListBoardItems;

          // Extract unique authors
          const authors = Array.from(new Set(result.items.map((item) => item.author))).filter(
            (author) => !userAttributes[author]
          );

          // Fetch user attributes for unique authors
          const fetchedAttributes = await Promise.all(
            authors.map(async (author) => {
              const userAttribute = await getUserAttributes(author);
              return { author, userAttribute };
            })
          );

          // Update userAttributes state
          const updatedAttributes = { ...userAttributes };
          fetchedAttributes.forEach(({ author, userAttribute }) => {
            updatedAttributes[author] = userAttribute;
          });

          // Update state
          setUserAttributes(updatedAttributes);
          setBoardItems(result.items);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };

      fetchBoardItems();
    }
  }, [board, page, rowsPerPage]);


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOnClickSearch = () => {
    //
  };

  const handleOnClickWrite = () => {
    navigate(`/board/add/${id}`);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%', // Adjust height as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 1, // Adjust padding as needed
      }}>
      <Box>
        { board?.header}
      </Box>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow sx={{ height: '400px' }}>
                <TableCell colSpan={5} align="center">
                  <CircularProgress size="100px" />
                </TableCell>
              </TableRow>
            )}
            {!loading && boardItems.map((boardItem) => (
              <TableRow key={boardItem.id}>
                <TableCell align="center">{boardItem.seq}</TableCell>
                <TableCell><Link to={`/board/detail/${board?.title}?seq=${boardItem.seq}`} className="NL_link">{boardItem.title}</Link></TableCell>
                <TableCell>{userAttributes[boardItem.author]?.name}</TableCell>
                <TableCell align="center">{toLocalDate(boardItem.createdAt)}</TableCell>
                <TableCell align="center">{boardItem.views}</TableCell>
              </TableRow>
            ))}
            {!loading && boardItems.length == 0 && (
              <TableRow sx={{ height: '150px' }}>
                <TableCell colSpan={5} align="center">No Articles</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[25, 30, 50]}
        component="div"
        count={boardItems.length}
        rowsPerPage={rowsPerPage}
        page={page-1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{width: '100%'}}
      />
      {/* Action Area */}
      <FlexRowBox sx= {{ mt: 1, gap: 1 }}>
        <Box sx={{ flex: 2 }}>
          <Select
            id="searchOption"
            size="small"
            value={searchOption}
            onChange={(e) => {setSearchOption(e.target.value);}}
            sx={{ width: '100%' }}
          >
            {selectableValues.map((item) => (
              <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ flex: 8, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
          <TextField
            id="searchText"
            size="small"
            value={searchText}
            onChange={(e) => {setSearchText(e.target.value);}}
            sx={{ width: '100%', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          />
        </Box>
        <FlexRowBox sx={{ flex: 1, gap: 1 }}>
          <Button
            variant='contained'
            startIcon={<IoSearch/>}
            sx={{width: '100%', height: '100%'}} >
            Search
          </Button>
          <Button
            variant="contained"
            startIcon={<FaRegPenToSquare />}
            onClick={handleOnClickWrite}
            sx={{width: '100%', height: '100%'}} >
            Write
          </Button>
        </FlexRowBox>
      </FlexRowBox>
      <Box>
        { board?.footer}
      </Box>
    </Box>
  );
};

export default View;