import { useState } from 'react';
import TabView from 'component/TabView';
import { SiteMenuTreeNode } from './SiteMenuTreeNode';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import GeneralMessagePopup, {MessageBoxType} from 'component/dialog/GeneralMessagePopup';
import { FaEdit } from 'react-icons/fa';
import { RiAddBoxLine, RiDeleteBin6Line, RiUserSettingsLine } from 'react-icons/ri';
import { generateClient } from 'aws-amplify/api';
import { deleteMenu } from 'graphql/mutations';
import 'amplifyconfigure';

interface SiteMenuSettingViewProps {
  menuNode: SiteMenuTreeNode;
  onEdit: (menuNode: SiteMenuTreeNode) => void;
  onAdd: (menuNode: SiteMenuTreeNode) => void;
  onClose: (reload: boolean) => void;
}

const SiteMenuSettingView = (props: SiteMenuSettingViewProps) => {
  const { menuNode, onEdit, onAdd, onClose } = props;
  const [openMessagePopup, setOpenMessagePopup] = useState(false);

  const onEditClickHandler = () => { onClickHandler('edit'); };
  const onAddClickHandler = () => { onClickHandler('add'); };
  const onDeleteClickHandler = () => { onClickHandler('delete'); };
  const onPermissionClickHandler = () => { onClickHandler('permission'); };

  const listItems = [
    { title: 'Edit Menu', icon: <FaEdit />, onClick: onEditClickHandler},
    { title: 'Add Menu', icon: <RiAddBoxLine />, onClick: onAddClickHandler },
    { title: 'Delete Menu', icon: <RiDeleteBin6Line />, onClick: onDeleteClickHandler },
    { title: 'Permissions', icon: <RiUserSettingsLine />, onClick: onPermissionClickHandler },
  ];
  
  function onClickHandler(action: string) {
    switch (action) {
    case 'edit':
      onEdit(menuNode);
      break;
    case 'add':
      onAdd(menuNode);
      break;
    case 'delete': {
      setOpenMessagePopup(true);
      break;
    }
    case 'permission':
      break;
    }
  }

  const amplifyDeleteMenu = async (id: string) => {
    const client = generateClient();
    try {
      await client.graphql({
        query: deleteMenu,
        variables: {
          input:  {
            id: id
          }
        },
        authMode: 'userPool'
      });
      onClose(true);
    } catch (error) {
      //console.error('Error deleting menu:', error);
    }
  };

  const handleOnClose = () => {
    onClose(false);
  };

  const handleCloseMessgePopup = (response: string) => { 
    setOpenMessagePopup(false);
    if (response === 'OK') {
      amplifyDeleteMenu(menuNode.id);
    }
  };

  return (
    <TabView title={menuNode.name} closeable onClose={handleOnClose}>
      <section className="NL_admin_menu_section">
        <Box>
          <b>Menu Type</b> : {menuNode.module}
        </Box>
        <List>
          {listItems.map((item, index) => (
            <Box key={item.title}>
              <ListItem disablePadding onClick={item.onClick}>
                <ListItemButton sx={{ py: 0, maxHeight: 32 }}>
                  <ListItemIcon sx={{ minWidth: 'auto', pl: 0, mr: 0.5 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
              {index < listItems.length - 1 && <Divider />} {/* Render Divider except after the last item */}
            </Box>
          ))}
        </List>
      </section>
      <GeneralMessagePopup
        open={openMessagePopup}
        onClose={handleCloseMessgePopup}
        title="Confirmation"
        message='Sub menues will also be deleted. Do you want to proceed ?'
        type={MessageBoxType.OKCancel}
      />
    </TabView>
  );
};

export default SiteMenuSettingView;

