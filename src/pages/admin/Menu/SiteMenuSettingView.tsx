import TabView from 'component/TabView';
import { SiteMenuTreeNode } from './SiteMenuTreeNode';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FaEdit } from 'react-icons/fa';
import { RiAddBoxLine, RiDeleteBin6Line, RiUserSettingsLine } from 'react-icons/ri';

interface SiteMenuSettingViewProps {
  menuNode: SiteMenuTreeNode;
  onEdit: (menuNode: SiteMenuTreeNode) => void;
  onAdd: (menuNode: SiteMenuTreeNode) => void;
  onClose: () => void;
}

const SiteMenuSettingView = (props: SiteMenuSettingViewProps) => {
  const { menuNode, onEdit, onAdd, onClose } = props;

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
    case 'delete':
      break;
    case 'permission':
      break;
    }
  }

  return (
    <TabView title={menuNode.name} closeable onClose={onClose}>
      <section className="NL_admin_menu_section">
        <Box sx={{mt: 0.5}}>
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
    </TabView>
  );
};

export default SiteMenuSettingView;

