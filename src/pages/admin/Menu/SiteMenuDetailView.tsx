import TabView from 'component/TabView';
import { SiteMenuTreeNode } from './SiteMenuTreeNode';

interface SiteMenuDetailViewProps {
  menuNode: SiteMenuTreeNode;
  onClose: () => void;
}

const SiteMenuDetailView = (props: SiteMenuDetailViewProps) => {
  const { menuNode, onClose} = props;

  return (
    <TabView title='Edit Menu' closeable onClose={onClose}>
      <section className="NL_admin_menu_section">
      </section>
    </TabView>
  );
};

export default SiteMenuDetailView;