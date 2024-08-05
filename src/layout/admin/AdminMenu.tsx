import styled from '@emotion/styled';
import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem } from '@mui/material';
import { useState } from 'react';
import { FaCaretDown, FaCaretLeft } from 'react-icons/fa6';
import { IoMdHome } from 'react-icons/io';
import { ImUser } from 'react-icons/im';
import { FaCaretRight } from 'react-icons/fa';

const menus = [{
  icon: <IoMdHome/>, title: 'Edit Site', subMenus: [{
    title: 'Edit Menu', to: '/admin/menu'
  }]}, {
  icon: <ImUser/>, title: 'Members', subMenus: [{
    title: 'Member List', to: '/admin/members'},{
    title: 'Group List', to: '/admin/groups'},{
    title: 'Member Setting', to: '/admin/member/setting'
  }]}
];

const AdminMenu = () => {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <Box className={'NL_admin_drawer_container ' + (open ? 'open' : 'close')}>
      <Box className={'NL_admin_drawer_menu ' + (open ? 'open' : 'close')}>
        {menus.map((menu, index) => (
          <Accordion key={index} defaultExpanded={index === activeMenu} className={`NL_admin_drawer_accordion ${index === activeMenu ? ' active' : ''}` }>
            <AccordionSummary expandIcon={open ? <FaCaretDown/> : <></>} className='NL_admin_drawer_accordion_summary'>
              {menu.icon} <Box sx={{marginLeft: '5px', display: open ? 'block' : 'none'}}>{menu.title}</Box>
            </AccordionSummary>
            <AccordionDetails className='NL_admin_drawer_accordion_detail' sx={{display: open ? 'block' : 'none'}}>
              <List className='NL_admin_drawer_accordion_list'>
                {menu.subMenus.map((subMenu, index) => (
                  <ListItem key={index} className='NL_admin_drawer_accordion_list_item'>
                    <Box sx={{display: open ? 'block' : 'none'}}>{subMenu.title}</Box>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box className={'NL_admin_drawer_toggle ' + (open ? 'open' : 'close')} onClick={() => setOpen(!open)}>
        <Box className='NL_admin_drawer_toggle_icon'>
          { open ? <FaCaretLeft/> : <FaCaretRight/> }
        </Box>
      </Box>
    </Box>
  );
};

export default AdminMenu;
