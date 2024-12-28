import { Box, Button, Divider, Stack, Typography, dividerClasses } from '@mui/material';
import { GraphqlQueryDeleteBoardItem, GraphqlQueryGetBoardItemBySeq, IBoardItem } from 'function/amplify/graphqlQueries';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { TbUserEdit } from 'react-icons/tb';
import { getUserAttributes } from 'function/amplify/auth';
import { IoEyeOutline, IoTimeOutline } from 'react-icons/io5';
import { toLocalDate } from 'function/amplify/awsDate';
import { incrementBoardItemViews } from 'function/amplify/restApiQueries';
import { FlexBox, FlexRowBox } from 'component/CustomMaterialUI';
import { FaRegListAlt } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { PiEraserDuotone} from 'react-icons/pi';
import { getCurrentUser } from 'aws-amplify/auth';
import { ConfirmDeleteDialog } from 'component/dialog/ConfirmDeleteDialog';

const Detail = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [boardItem, setBoardItem] = useState<IBoardItem | undefined>(undefined);
  const [authorAttribute, setAuthorAttribute] = useState<{name: string}>({name: ''});
  const [isAuthor, setIsAuthor] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // Helper function to parse query parameters
  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };
  
  const title = params.id || '';
  const queryParams = getQueryParams();
  const seq = parseInt(queryParams.get('seq') || '0', 0); // Replace 'key' with your query parameter name

  useEffect(() => {
    const getBoardItem = async(title: string, seq: number) => {
      const boardItem = await GraphqlQueryGetBoardItemBySeq(title, seq) as IBoardItem;
      const result = await incrementBoardItemViews(boardItem.id);
      if (result) { 
        boardItem.views = boardItem.views + 1;
      }
      setBoardItem(boardItem);
    };

    getBoardItem(title, seq);
  }, [title, seq]);

  useEffect(() => {
    const getAuthorAttributes = async( author: string) => {
      try {
        const authorAttributes = await getUserAttributes(author);
        setAuthorAttribute(authorAttributes);

        const user = await getCurrentUser();
        setIsAuthor(user.username === author);
      } catch (error) {
        setIsAuthor(false);
      }
    };

    if (boardItem) {
      getAuthorAttributes(boardItem.author);
    }
  }, [boardItem]);

  const onClickDeleteHandler = () => {
    setDeleteDialogOpen(true);
  };

  const onSubmitDeleteHandler = async () => {
    setDeleteDialogOpen(false);
    if (boardItem) {
      await GraphqlQueryDeleteBoardItem(boardItem.id);
    }
    navigateToBoardList();
  };

  const navigateToBoardList = () => {
    navigate(`/board/${boardItem?.board?.title}`);
  };

  const navigateToBoarItemEdit = () => {
    navigate(`/board/edit/${boardItem?.board?.title}?id=${boardItem?.id}`);
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
        gap: 1,
      }}>
      {/* Board & BoardItem Title */}
      <Box>
        <Typography variant='h5'
          sx={{
            display: 'flex',
            alignItems: 'center',
            [`& .${dividerClasses.root}`]: {
              mx: 1.5,
            },
          }}>
          { boardItem?.board?.title }
          <Divider component="div" orientation="vertical" flexItem/>
          { boardItem?.title }
        </Typography>
      </Box>
      {/* BoardItem Attributes */}
      <Stack direction="row" spacing={2}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <TbUserEdit className='icon' />
          { authorAttribute.name }
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <IoTimeOutline className='icon' />
          { toLocalDate(boardItem?.updatedAt ?? '') }
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <IoEyeOutline className='icon' />
          { boardItem?.views ?? 1 }
        </Box>
      </Stack>
      {/* Detail Content */}
      <Divider flexItem/>
      <Box sx={{minHeight: '450px'}}>
        <div dangerouslySetInnerHTML={{ __html:boardItem?.content ?? '' }} />
      </Box>
      {/* Detail Action */}
      <Divider flexItem/>
      <FlexRowBox>
        <FlexBox sx={{flexGrow: 1}}>
          <Button variant="contained" color="primary" startIcon={<FaRegListAlt/>} onClick={navigateToBoardList}>
            List
          </Button>
        </FlexBox>
        { isAuthor && (
          <FlexBox sx={{gap: 1}}>
            <Button variant="contained" color="primary" startIcon={<PiEraserDuotone/>} onClick={navigateToBoarItemEdit}>
              Update
            </Button>
            <Button variant="contained" color="warning" startIcon={<RiDeleteBin6Fill/>} onClick={onClickDeleteHandler}>
              Delete
            </Button>
          </FlexBox>
        )}
      </FlexRowBox>
      <ConfirmDeleteDialog 
        open={deleteDialogOpen}
        onClose={() => {setDeleteDialogOpen(false);}}
        onConfirm={onSubmitDeleteHandler}
        itemName={boardItem?.title ?? undefined}
      />
    </Box>
  );
};

export default Detail;
