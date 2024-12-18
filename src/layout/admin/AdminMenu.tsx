import { Accordion, AccordionDetails, AccordionSummary, Box, Button, List, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { FaCaretDown, FaCaretLeft } from 'react-icons/fa6';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoMdHome } from 'react-icons/io';
import { ImUser } from 'react-icons/im';
import { FaCaretRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GraphqlQueryListAllModules } from 'function/amplify/graphqlQueries';
import { IModule } from 'interfaces';

interface IMenu {
  icon: JSX.Element, title: string, subMenus?: ISubMenu[], onClick: () => void
}

interface ISubMenu {
  title: string, onClick: () => void
}

const AdminMenu = () => {
  const [open, setOpen] = useState(true);
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]); // Manage expanded indices
  const [activeMenu, setActiveMenu] = useState<number | null>(null); // Track active menu
  const [modules, setModules] = useState<IModule[]>([]);
  const [menus, setMenus] = useState<IMenu[]>([]);
  const navigate = useNavigate();

  const handleAccordionChange = (index: number) => (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
    setExpandedIndices(prevIndices =>
      isExpanded
        ? [...prevIndices, index]
        : prevIndices.filter(i => i !== index)
    );
  };

  useEffect(() => {
    const getModuleList = async () => {
      try {
        const modules = await GraphqlQueryListAllModules();
        setModules(modules);
      } catch (error) {
        //console.error('Error fetching module list:', error);
      }
    };
    getModuleList();
  }, []);

  useEffect(() => {
    const menuNavigate = (clickedMenu: number, href?: string) => {
      setOpen(true);
      setActiveMenu(clickedMenu);
      if (href) navigate(href);
    };

    const handleSubMenuClick = (index: number, subMenuIndex: number, href?: string) => () => {
      menuNavigate(index, href);
    };

    if (modules) {
      const menus: IMenu[] = [
        {
          icon: <MdSpaceDashboard />, title: 'Dashboard', onClick: () => { menuNavigate(0, '/admin'); }
        }, {
          icon: <IoMdHome />, title: 'Edit Site', subMenus: [
            { title: 'Edit Menu', onClick: handleSubMenuClick(1, 0, '/admin/menu') },
          ], onClick: () => { menuNavigate(1); }
        }, {
          icon: <IoMdHome />, title: 'Edit Modules', subMenus: [
            { title: 'Module List', onClick: handleSubMenuClick(2, 0, '/admin/module') },
            ...modules
              .sort((a, b) => (a.name.localeCompare(b.name)))
              .map((module: IModule) => {
                return { title: module.name, onClick: handleSubMenuClick(2, 1, '/admin/' + module.name.toLowerCase()) };
              })
          ], onClick: () => { menuNavigate(2); }
        }, {
          icon: <ImUser />, title: 'Members', subMenus: [
            { title: 'Member List', onClick: handleSubMenuClick(3, 0, '/admin/members') }, 
            { title: 'Group List', onClick: handleSubMenuClick(3, 1, '/admin/groups') }, 
            { title: 'Member Setting', onClick: handleSubMenuClick(3, 2, '/admin/member/setting') },
          ], onClick: () => { menuNavigate(3); }
        }
      ];
      setMenus(menus);
    }
  }, [modules, navigate]);
  /*

  */

  return (
    <Box className={'NL_admin_drawer_container ' + (open ? 'open' : 'close')}>
      <Box className={'NL_admin_drawer_menu ' + (open ? 'open' : 'close')}>
        {menus.map((menu, index) => (
          <Accordion
            key={index}
            expanded={expandedIndices.includes(index)}
            onChange={handleAccordionChange(index)}
            className={`NL_admin_drawer_accordion ${index === activeMenu ? ' active' : ''}`}
          >
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
                  {menu.subMenus.map((subMenu, subMenuIndex) => (
                    <ListItem key={subMenuIndex}
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
