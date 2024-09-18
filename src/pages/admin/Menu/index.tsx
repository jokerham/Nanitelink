import { useEffect, useState } from 'react';
import { SiteMenuTreeNode, isSiteMenuTreeNode } from './SiteMenuTreeNode';
import SiteMenuView from './SiteMenuView';
import SiteMenuSettingView from './SiteMenuSettingView';
import SiteMenuDetailView from './SiteMenuDetailView';
import SiteMenuAddView from './SiteMenuAddView';

const Menu = () => {
  const [menuNode, setMenuNode] = useState<SiteMenuTreeNode | undefined>();
  const [menuReloadKey, setMenuReloadkey] = useState(1);
  const [openMenuSettingView, setOpenMenuSettingView] = useState(false);
  const [openMenuDetailView, setOpenMenuDetailView] = useState(false);
  const [openMenuAddView, setOpenMenuAddView] = useState(false);
  
  const handleMenuItemClicked = (node: SiteMenuTreeNode) => { handleClicked('menuItem', node, true); };
  const handleCloseMenuSettingViewClicked = (reload: boolean) => { handleClicked('menuItem', menuNode, false, reload); };
  const handleMenuItemEditClicked = (node: SiteMenuTreeNode) => { handleClicked('menuItemEdit', node, true); };
  const handleCloseMenuItemEditViewClicked = () => { handleClicked('menuItemEdit', menuNode, false); };
  const handleMenuItemAddClicked = (node?: SiteMenuTreeNode) => { handleClicked('menuItemAdd', node, true); };
  const handleCloseMenuItemAddViewClicked = (reload: boolean) => { handleClicked('menuItemAdd', menuNode, false, reload); };

  const handleClicked = (action: string, node: SiteMenuTreeNode | undefined, open: boolean, reload?: boolean) => {
    if (reload) setMenuReloadkey(prev => prev + 1);
    switch (action) {
    case 'menuItem':
      if (open) {
        setMenuNode(node);
        setOpenMenuSettingView(true);
      } else {
        setOpenMenuSettingView(false);
      }
      setOpenMenuDetailView(false);
      setOpenMenuAddView(false);
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
        if (node && isSiteMenuTreeNode(node)) {
          setMenuNode(node);
        } else {
          setOpenMenuSettingView(false);
        }
        setOpenMenuDetailView(false);
        setOpenMenuAddView(true);
      } else {
        setOpenMenuAddView(false);
        setOpenMenuSettingView(false);
      }
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    setOpenMenuSettingView(false);
    setOpenMenuDetailView(false);
    setOpenMenuAddView(false);
  }, [menuReloadKey]);

  return (
    <div className='NL_admin_menu_container'>
      <SiteMenuView 
        key={menuReloadKey}
        onAddMenuClick={handleMenuItemAddClicked}
        onMenuItemClicked={handleMenuItemClicked}/>
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
      { openMenuAddView &&
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