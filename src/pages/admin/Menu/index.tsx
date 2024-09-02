import { useState } from 'react';
import { SiteMapTreeNode } from './SiteMapTreeNode';
import SiteMenuView from './SiteMenuView';

const Menu = () => {
  const [openMenuSettingView, setOpenMenuSettingView] = useState(false);
  const handleMenuItemClicked = (node: SiteMapTreeNode) => {
    console.log('Node clicked:', node);
  };

  return (
    <>
      <SiteMenuView onMenuItemClicked={handleMenuItemClicked}/>
    </>
  );
};

export default Menu;