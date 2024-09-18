import { Tree, NodeRendererProps } from 'react-arborist';
import { FaFolder, FaFolderOpen, FaHome, FaPlusCircle } from 'react-icons/fa';
import { CgMenuBoxed } from 'react-icons/cg';
import { ButtonBlackSmall, TextFieldFocusRedBorderSmall } from 'component/CustomMaterialUI';
import { useEffect, useState } from 'react';
import useResizeObserver from 'use-resize-observer';
import { SiteMenuTreeNode } from './SiteMenuTreeNode';
import { generateClient } from 'aws-amplify/api';
import { listMenus } from 'graphql/queries';
import TabView from 'component/TabView';

interface NodeAdditionalProps {
  onNodeClick: (node: SiteMenuTreeNode) => void
}

type NodeProps =
  NodeRendererProps<SiteMenuTreeNode> &
  NodeAdditionalProps
;

interface SiteMenuViewProps {
  onAddMenuClick: () => void,
  onMenuItemClicked: (node: SiteMenuTreeNode) => void;
}

const Header = () => {
  return (
    <form id="menu_find">
      <TextFieldFocusRedBorderSmall name="keyword" />
      <ButtonBlackSmall sx={{ml:1}}>찾기</ButtonBlackSmall>
      {/* <button className="" type="button">다음</button> */}
    </form>
  );
};

const Node = (props: NodeProps) => {
  const { node, style, dragHandle, onNodeClick } = props;
  const hasParent = (node.data?.parent ?? '') != '';
  const hasChildren = node.children?.length ?? 0 > 0;
  const isClosed = node.isClosed;
  const nodeName = node.data.name;
  const active = node.data.active ? 'active' : '';
  const icon = hasParent ? (hasChildren ? (isClosed ? <FaFolder /> : <FaFolderOpen />) : <CgMenuBoxed />) : <FaHome />;

  const handleClick = () => {
    onNodeClick(node.data); // Notify the parent about the clicked node
  };
  
  return (
    <div style={style} ref={dragHandle as React.Ref<HTMLDivElement>}>
      <span className={`NL_admin_menu_node ${active}`} onClick={handleClick}>
        <span className='icon'>{ icon }</span>
        <span>{ nodeName }</span>
      </span>
    </div>
  );
};

const SiteMenuView = (props: SiteMenuViewProps) => {
  const [treeData, setTreeData] = useState<SiteMenuTreeNode[]>([]);
  const { ref, width, height } = useResizeObserver();

  const fetchNodeChildren = async (nodeId: string): Promise<SiteMenuTreeNode[]> => {
    const client = generateClient();
    const result = await client.graphql({
      query: listMenus,
      variables: { filter: { parent: { eq: nodeId } } }
    });

    if (result.data?.listMenus?.items) {
      return result.data.listMenus.items.map(item => ({
        id: item.id,
        name: item.name,
        active: false,
        parent: nodeId,
        module: item.module?.name ?? '',
        children: []
      }));
    } else {
      return [];
    }
  };

  const handleExpand = async (node: SiteMenuTreeNode) => {
    if (!node.children || node.children.length === 0) {
      const children = await fetchNodeChildren(node.id);
      const updateTreeData = (data: SiteMenuTreeNode[]): SiteMenuTreeNode[] => {
        return data.map(item => {
          if (item.id === node.id) {
            return { ...item, children };
          } else if (item.children) {
            return { ...item, children: updateTreeData(item.children) };
          }
          return item;
        });
      };
      setTreeData(prevTreeData => updateTreeData(prevTreeData));
    }
  };

  // UseEffect to fetch the root menu and its sub menu
  useEffect(() => {
    const fetchData = async () => {
      const rootNodes = await fetchNodeChildren('');
      setTreeData(rootNodes);
      
      if (rootNodes.length > 0) {
        handleExpand(rootNodes[0]);
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabView 
      title='Edit Site Menu'
      header={<Header />}>
      <section className="NL_admin_menu_section" ref={ref}>
        <Tree<SiteMenuTreeNode> 
          data={treeData}
          indent={20}
          padding={0}
          width={width}
          height={height}
          rowHeight={22}>
          {(nodeProps: NodeRendererProps<SiteMenuTreeNode>) => (
            <Node {...nodeProps} onNodeClick={props.onMenuItemClicked} />
          )}
        </Tree>
      </section>
      <div className="NL_admin_menu_action">
        <button type="button" onClick={props.onAddMenuClick}>
          <FaPlusCircle className='NL_icon'/>Add Menu
        </button>
      </div>
    </TabView>
  );
};

export default SiteMenuView;

/*
[REFERENCE]
https://www.jameskerr.blog/posts/responsive-sizing-for-react-arborist-tree-component/
*/