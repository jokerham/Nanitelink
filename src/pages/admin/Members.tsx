import { Button, ButtonGroup, Box, Divider, Toolbar, Table, TableContainer, TableHead, TableRow, TableCell, ToggleButtonGroup, ToggleButton, TableBody, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import 'amplifyconfigure';
import config from 'aws-exports';
import awsconfig from 'aws-config';

const Members = () => {
  const [members, setMembers] = useState<AWS.CognitoIdentityServiceProvider.UsersListType | undefined>();
  const [filter, setFilter] = useState<string | null>('all');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        AWS.config.update(awsconfig);
        const cognitoISP = new AWS.CognitoIdentityServiceProvider();
        const params = {
          //region: config.aws_project_region,
          UserPoolId: config.aws_user_pools_id, // Replace with your user pool ID
          // Optional: Filter and pagination options
          // Limit: 10, // Specify number of users to return
          // PaginationToken: 'token' // For fetching subsequent results
          AttributesToGet: [
            'name',
            'email',
            'nickname',
            'picture',
          ]
        };
        const response = await cognitoISP.listUsers(params).promise();
        console.log('Cognito Users:', response.Users);
        setMembers(response.Users);
      } catch (error) {
        console.error('Error listing users:', error);
        throw error;
      }
    };

    fetchMembers();
  }, []);

  const onChangeFilterHandler = (_event: React.MouseEvent<HTMLElement>, value: string | null) => {
    setFilter(value);
  };

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
            {members?.map((member, index) => (
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
