import TabView from 'component/TabView';
import { SiteMenuTreeNode } from './SiteMenuTreeNode';

interface SiteMenuAddViewProps {
  menuNode: SiteMenuTreeNode;
  onClose: () => void;
}

const SiteMenuAddView = (props: SiteMenuAddViewProps) => {
  const { menuNode, onClose} = props;

  return (
    <TabView title='Add Menu' closeable onClose={onClose}>
      <section className="NL_admin_menu_section">
      </section>
    </TabView>
  );
};

export default SiteMenuAddView;