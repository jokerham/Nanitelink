import { Button, ButtonGroup, Box, Divider, Toolbar, Table, TableContainer, TableHead, TableRow, TableCell, ToggleButtonGroup, ToggleButton, TableBody, Paper } from '@mui/material';
import { useState, useEffect, Key } from 'react';
import * as Auth from 'aws-amplify/auth';
import * as API from 'aws-amplify/api';
import 'amplifyconfigure';
import { toast } from 'react-toastify';
import { Amplify } from 'aws-amplify';

interface IAttribute {
  Name: string
  Value: string
}

interface IMember {
  Attributes: IAttribute[]
}

interface IResult {
  users: IMember[],
  totalPages: number
}

const Members = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [members, setMembers] = useState<IMember[] | undefined>();
  const [filter, setFilter] = useState<string | null>('all');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const userPoolId = Amplify.getConfig().Auth?.Cognito.userPoolId ?? '';
        const session = await Auth.fetchAuthSession();
        const token = session.tokens?.idToken;
        if (token) {
          const response = await API.get({
            apiName: 'users',
            path: '/users',
            options: {
              headers: {
                Authorization: token.toString()
              },
              queryParams: {
                UserPoolId: userPoolId
              }
            },
            //queryStringParameters: queryParameters,
          }).response;
          const data = await response.body.json() as unknown as IResult;
          setMembers(data.users);
          setTotalPages(data.totalPages);
        }
      } catch (error) {
        toast.error('Error listing users:' + error);
      }
    };

    fetchMembers();
  }, []);

  const onChangeFilterHandler = (_event: React.MouseEvent<HTMLElement>, value: string | null) => {
    setFilter(value);
  };

  // const columns: GridColDef[] = [
  //   { field: 'id', headerName: '', width: 70 },
  //   { field: 'firstName', headerName: 'First name', width: 130 },
  //   { field: 'lastName', headerName: 'Last name', width: 130 },
  // ];

  return (
    <Box>
      <h1>Members</h1>
      <Divider />
      <Toolbar variant="dense" sx={{ displya: 'flex', justifyContent: 'space-between', px: { sm: 0 } }}>
        <ToggleButtonGroup exclusive size="small" value={filter} onChange={onChangeFilterHandler}>
          <ToggleButton value="all">All Members</ToggleButton>
          <ToggleButton value="admin">Admin</ToggleButton>
          <ToggleButton value="approved">Approved</ToggleButton>
          <ToggleButton value="rejected">Rejected</ToggleButton>
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
              <TableCell>Name</TableCell>
              <TableCell>Nickname</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members?.map((member: IMember, index: Key | null | undefined) => (
              <TableRow key={index}>
                <TableCell>{member.Attributes?.find(attr => attr.Name === 'name')?.Value}</TableCell>
                <TableCell>{member.Attributes?.find(attr => attr.Name === 'nickname')?.Value}</TableCell>
                <TableCell>{member.Attributes?.find(attr => attr.Name === 'email')?.Value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box >
  );
};

export default Members;
