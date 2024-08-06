import { Button, ButtonGroup, Box, Divider, Toolbar, Table, TableContainer, TableHead, TableRow, TableCell } from '@mui/material';
import { ButtonText } from 'component/CustomMaterialUI';
import ButtonGroupText from 'component/CustomMaterialUI/ButtonGroupText';
import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import 'amplifyconfigure';
import config from 'aws-exports.js';

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        AWS.config.update({
          region: config.aws_project_region, // Replace with your actual AWS region
          credentials: new AWS.Credentials({
            accessKeyId: '',
            secretAccessKey: 'your-secret-access-key'
          })
        });
        const cognitoISP = new AWS.CognitoIdentityServiceProvider();
        const params = {
          //region: config.aws_project_region,
          UserPoolId: config.aws_cognito_identity_pool_id, // Replace with your user pool ID
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
        return response.Users;
      } catch (error) {
        console.error('Error listing users:', error);
        throw error;
      }
    };

    fetchMembers();
  }, []);

  return (
    <Box>
      <h1>Members</h1>
      <Divider />
      <Toolbar variant="dense" sx={{ displya: 'flex', justifyContent: 'space-between', px: { sm: 0 } }}>
        <ButtonGroupText>
          <ButtonText>All Members</ButtonText>
          <ButtonText>Admin</ButtonText>
          <ButtonText>Approved</ButtonText>
          <ButtonText>Rejected</ButtonText>
        </ButtonGroupText>
        <ButtonGroup>
          <Button size="medium" variant="contained"><Box>Add</Box></Button>
          <Button size="medium" variant="contained"><Box>Modify</Box></Button>
          <Button size="medium" variant="contained"><Box>Delete</Box></Button>
        </ButtonGroup>
      </Toolbar>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>1</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Box >
  );
};

export default Members;
