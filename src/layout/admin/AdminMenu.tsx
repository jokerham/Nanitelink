import { Accordion, AccordionDetails, AccordionSummary, Box, Button, List, ListItem } from '@mui/material';
import { useState } from 'react';
import { FaCaretDown, FaCaretLeft } from 'react-icons/fa6';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoMdHome } from 'react-icons/io';
import { ImUser } from 'react-icons/im';
import { FaCaretRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface IMenu {
  icon: JSX.Element, title: string, subMenus?: ISubMenu[], onClick: () => void
}

interface ISubMenu {
  title: string, onClick: () => void
}

const AdminMenu = () => {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0);
  const navigate = useNavigate();

  const menuNavigate = (clickedMenu: number, href?: string) => {
    setOpen(true);
    setActiveMenu(clickedMenu);
    if (href) navigate(href);
  };

  const menus: IMenu[] = [
    {
      icon: <MdSpaceDashboard />, title: 'Dashboard', onClick: () => { menuNavigate(0, '/admin'); }
    }, {
      icon: <IoMdHome />, title: 'Edit Site', subMenus: [
        {
          title: 'Edit Menu', onClick: () => { menuNavigate(1, '/admin/menu'); }
        }
      ], onClick: () => { menuNavigate(1); }
    }, {
      icon: <ImUser />, title: 'Members', subMenus: [
        {
          title: 'Member List', onClick: () => { menuNavigate(2, '/admin/members'); }
        }, {
          title: 'Group List', onClick: () => { menuNavigate(2, '/admin/groups'); }
        }, {
          title: 'Member Setting', onClick: () => { menuNavigate(2, '/admin/member/setting'); }
        }
      ], onClick: () => { menuNavigate(2); }
    }
  ];

  return (
    <Box className={'NL_admin_drawer_container ' + (open ? 'open' : 'close')}>
      <Box className={'NL_admin_drawer_menu ' + (open ? 'open' : 'close')}>
        {menus.map((menu, index) => (
          <Accordion key={index} defaultExpanded={index === activeMenu} className={`NL_admin_drawer_accordion ${index === activeMenu ? ' active' : ''}`}>
            <AccordionSummary
              expandIcon={open && (menu.subMenus?.length ?? 0) > 0 ? <FaCaretDown /> : <></>}
              className='NL_admin_drawer_accordion_summary'
              onClick={menu.onClick}
            >
              {menu.icon} <Box sx={{ marginLeft: '5px', display: open ? 'block' : 'none' }}>{menu.title}</Box>
            </AccordionSummary>
            {menu.subMenus && (menu.subMenus?.length ?? 0) > 0 && (
              <AccordionDetails className='NL_admin_drawer_accordion_detail' sx={{ display: open ? 'block' : 'none' }}>
                <List className='NL_admin_drawer_accordion_list'>
                  {menu.subMenus.map((subMenu, index) => (
                    <ListItem key={index}
                      className='NL_admin_drawer_accordion_list_item'
                      onClick={subMenu.onClick}
                    >
                      <Button fullWidth className='buttonLink' sx={{ display: open ? 'block' : 'none' }}>
                        <Box>{subMenu.title}</Box>
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </Box>
      <Box className={'NL_admin_drawer_toggle ' + (open ? 'open' : 'close')} onClick={() => setOpen(!open)}>
        <Box className='NL_admin_drawer_toggle_icon'>
          {open ? <FaCaretLeft /> : <FaCaretRight />}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminMenu;
