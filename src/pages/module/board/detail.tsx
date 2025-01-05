import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';
import { getUrl } from 'aws-amplify/storage';
import { Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, dividerClasses } from '@mui/material';
import { FlexBox, FlexRowBox } from 'component/CustomMaterialUI';
import { ConfirmDeleteDialog } from 'component/dialog/ConfirmDeleteDialog';
//import GeneralMessagePopup, { MessageBoxType } from 'component/dialog/GeneralMessagePopup';
import { toLocalDate } from 'function/amplify/awsDate';
import { deleteBoardItem, getBoardItem, IBoardItem } from 'function/amplify/restApiQueries';
import { FaRegListAlt } from 'react-icons/fa';
import { IoEyeOutline, IoTimeOutline } from 'react-icons/io5';
import { PiEraserDuotone} from 'react-icons/pi';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { TfiSave } from 'react-icons/tfi';
import { TbUserEdit } from 'react-icons/tb';
import { formatFileSize } from 'function/formatFileSize';

const Detail = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [boardItem, setBoardItem] = useState<IBoardItem | undefined>(undefined);
  const [isAuthor, setIsAuthor] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Helper function to parse query parameters
  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };
  
  const title = params.id || '';
  const queryParams = getQueryParams();
  const seq = parseInt(queryParams.get('seq') || '0', 0); // Replace 'key' with your query parameter name

  // Fetch board item by title and sequence
  useEffect(() => {
    const getBoardItemFromRestApi = async(title: string, seq: number) => {
      const boardItem = await getBoardItem(title, seq) as unknown as IBoardItem;
      setBoardItem(boardItem);
      const currentUser = await getCurrentUser();
      if (boardItem.author.username === currentUser.username) {
        setIsAuthor(true);
      }
      setLoading(false);
    };

    getBoardItemFromRestApi(title, seq);
  }, [title, seq]);

  const onClickDeleteHandler = () => {
    setDeleteDialogOpen(true);
  };

  const onDialogClose = (result: string) => {
    switch(result) {
      case 'Yes':
        onSubmitDeleteHandler();
        break;
      case 'No':
        setDeleteDialogOpen(false);
        break;
    }
  };

  const onSubmitDeleteHandler = async () => {
    setDeleteDialogOpen(false);
    if (boardItem) {
      await deleteBoardItem(boardItem.id);
    }
    navigateToBoardList();
  };

  const navigateToBoardList = () => {
    navigate(`/board/${boardItem?.board?.title}`);
  };

  const navigateToBoarItemEdit = () => {
    navigate(`/board/edit/${boardItem?.board?.title}?seq=${boardItem?.seq}`);
  };

  const onDownloadAttachment = async (path: string) => {
    const { url } = await getUrl({ path });
    window.open(url.href, '_blank');
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
      {!loading && (
        <>
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
              { boardItem?.author.name }
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
          <List dense={true}>
            {boardItem?.attachments.map((attachment, index) => (
              <ListItem
                key={index}
                onMouseEnter={(event) => { event.currentTarget.style.cursor = 'pointer'; } }
                onClick={() => onDownloadAttachment(attachment.path)}>
                <ListItemIcon sx={{fontSize: '1.5rem', minWidth: '36px'}}>
                  <TfiSave/>
                </ListItemIcon>
                <ListItemText
                  primary={attachment.filename}
                  secondary={formatFileSize(attachment.fileSize)}
                />
              </ListItem>
            ))}
          </List>
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
          {/* <GeneralMessagePopup
            open={deleteDialogOpen}
            onClose={onDialogClose}
            title={boardItem?.title ?? ''}
            type={MessageBoxType.YesNo}
            message={'Are you sure you want to delete this item?'}
          /> */}
        </>
      )}
    </Box>
  );
};

export default Detail;
