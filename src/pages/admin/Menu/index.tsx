import { useState } from 'react';
import { SiteMapTreeNode } from './SiteMapTreeNode';
import SiteMenuView from './SiteMenuView';
import SiteMenuSettingView from './SiteMenuSettingView';

const Menu = () => {
  const [openMenuSettingView, setOpenMenuSettingView] = useState(false);
  const [menuNode, setMenuNode] = useState<SiteMapTreeNode | undefined>();
  const handleMenuItemClicked = (node: SiteMapTreeNode) => {
    //console.log('Node clicked:', node);
    setMenuNode(node);
    setOpenMenuSettingView(true);
  };

  return (
    <div className='NL_admin_menu_container'>
      <SiteMenuView onMenuItemClicked={handleMenuItemClicked}/>
      { openMenuSettingView && menuNode && (<SiteMenuSettingView menuNode={menuNode} />)}
    </div>
  );
};

export default Menu;