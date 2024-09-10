import { useState } from 'react';
import { SiteMenuTreeNode } from './SiteMenuTreeNode';
import SiteMenuView from './SiteMenuView';
import SiteMenuSettingView from './SiteMenuSettingView';
import SiteMenuDetailView from './SiteMenuDetailView';
import SiteMenuAddView from './SiteMenuAddView';

const Menu = () => {
  const [menuNode, setMenuNode] = useState<SiteMenuTreeNode | undefined>();
  const [openMenuSettingView, setOpenMenuSettingView] = useState(false);
  const [openMenuDetailView, setOpenMenuDetailView] = useState(false);
  const [openMenuAddView, setOpenMenuAddView] = useState(false);
  
  const handleMenuItemClicked = (node: SiteMenuTreeNode) => { handleClicked('menuItem', node, true); };
  const handleCloseMenuSettingViewClicked = () => { handleClicked('menuItem', menuNode, false); };
  const handleMenuItemEditClicked = (node: SiteMenuTreeNode) => { handleClicked('menuItemEdit', node, true); };
  const handleCloseMenuItemEditViewClicked = () => { handleClicked('menuItemEdit', menuNode, false); };
  const handleMenuItemAddClicked = (node: SiteMenuTreeNode) => { handleClicked('menuItemAdd', node, true); };
  const handleCloseMenuItemAddViewClicked = () => { handleClicked('menuItemAdd', menuNode, false); };

  const handleClicked = (action: string, node: SiteMenuTreeNode | undefined, open: boolean) => {
    switch (action) {
    case 'menuItem':
      if (open) {
        setMenuNode(node);
        setOpenMenuSettingView(true);
      } else {
        setOpenMenuSettingView(false);
        setOpenMenuDetailView(false);
        setOpenMenuAddView(false);
      }
      break;
    case 'menuItemEdit':
      if (open) {
        setMenuNode(node);
        setOpenMenuAddView(false);
        setOpenMenuDetailView(true);
      } else {
        setOpenMenuDetailView(false);
      }
      break;
    case 'menuItemAdd':
      if (open) {
        setMenuNode(node);
        setOpenMenuDetailView(false);
        setOpenMenuAddView(true);
      } else {
        setOpenMenuAddView(false);
      }
      break;
    default:
      break;
    }
  };

  return (
    <div className='NL_admin_menu_container'>
      <SiteMenuView onMenuItemClicked={handleMenuItemClicked}/>
      { openMenuSettingView && menuNode && 
        (
          <SiteMenuSettingView 
            menuNode={menuNode} 
            onEdit={handleMenuItemEditClicked}
            onAdd={handleMenuItemAddClicked}
            onClose={handleCloseMenuSettingViewClicked} 
          />
        )
      }
      { openMenuDetailView && menuNode &&
        (
          <SiteMenuDetailView 
            menuNode={menuNode} 
            onClose={handleCloseMenuItemEditViewClicked}
          />
        )
      }
      { openMenuAddView && menuNode &&
        (
          <SiteMenuAddView 
            menuNode={menuNode} 
            onClose={handleCloseMenuItemAddViewClicked}
          />
        )
      }
    </div>
  );
};

export default Menu;