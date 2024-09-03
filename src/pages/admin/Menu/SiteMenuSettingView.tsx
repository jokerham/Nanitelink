import TabView from 'component/TabView';
import { SiteMapTreeNode } from './SiteMapTreeNode';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FaEdit } from 'react-icons/fa';
import { RiAddBoxLine, RiDeleteBin6Line, RiUserSettingsLine } from 'react-icons/ri';

interface SiteMenuSettingViewProps {
  menuNode: SiteMapTreeNode;
}

const SiteMenuSettingView = (props: SiteMenuSettingViewProps) => {
  const { menuNode } = props;
  const listItems = [
    { title: '메뉴수정', icon: <FaEdit />, onClick: onClickHandler},
    { title: '메뉴추가', icon: <RiAddBoxLine />, onClick: onClickHandler },
    { title: '메뉴삭제', icon: <RiDeleteBin6Line />, onClick: onClickHandler },
    { title: '권한설정', icon: <RiUserSettingsLine />, onClick: onClickHandler },
  ];
  
  function onClickHandler() {
    console.log('TEST');
  }

  return (
    <TabView title={menuNode.name}>
      <section className="NL_admin_menu_section">
        <Box sx={{mt: 0.5}}>
          <b>메뉴타입</b> : {menuNode.module}
        </Box>
        <List>
          {listItems.map((item, index) => (
            <Box key={item.title}>
              <ListItem disablePadding>
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

