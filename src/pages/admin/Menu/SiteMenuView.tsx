import { Tree, NodeRendererProps } from 'react-arborist';
import { FaFolder, FaFolderOpen, FaHome, FaPlusCircle } from 'react-icons/fa';
import { CgMenuBoxed } from 'react-icons/cg';
import { ButtonBlackSmall, TextFieldFocusRedBorderSmall } from 'component/CustomMaterialUI';
import { useEffect, useState } from 'react';
import { SiteMapTreeNode } from './SiteMapTreeNode';
import { generateClient } from 'aws-amplify/api';
import { listMenus } from 'graphql/queries';

interface NodeProps {
  onNodeClick: (node: SiteMapTreeNode) => void
}

interface SiteMenuViewProps {
  onMenuItemClicked: (node: SiteMapTreeNode) => void;
}

//const Node: React.FC<NodeRendererProps<SiteMapTreeNode>> = ({node, style, dragHandle}) => {
const Node = (props: NodeRendererProps<SiteMapTreeNode> & NodeProps) => {
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
  const [treeData, setTreeData] = useState<SiteMapTreeNode[]>([]);

  const calculateHeight = () => {
    return window.innerHeight - 220;  
  };

  const [height, setHeight] = useState(calculateHeight());

  const fetchNodeChildren = async (nodeId: string): Promise<SiteMapTreeNode[]> => {
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
        children: []
      }));
    } else {
      return [];
    }
  };

  const handleExpand = async (node: SiteMapTreeNode) => {
    if (!node.children || node.children.length === 0) {
      const children = await fetchNodeChildren(node.id);
      const updateTreeData = (data: SiteMapTreeNode[]): SiteMapTreeNode[] => {
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

  // UseEffect for resizing the window based on windows height
  useEffect(() => {
    const handleResize = () => {
      setHeight(calculateHeight());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className="NL_admin_menu_tab">
      <h1>
        사이트 메뉴 편집
        {/* <a className="" href="" target="_blank">도움말</a> */}
      </h1>
      <form id="menu_find">
        <TextFieldFocusRedBorderSmall name="keyword" />
        <ButtonBlackSmall sx={{ml:1}}>찾기</ButtonBlackSmall>
        {/* <button className="" type="button">다음</button> */}
      </form>
      <div className="NL_admin_menu_content">
        <section className="NL_admin_menu_tree">
          <Tree<SiteMapTreeNode> 
            data={treeData}
            width={320}
            height={height}
            indent={20}
            padding={5}
            rowHeight={22}
          >
            {nodeProps => (
              <Node 
                {...nodeProps} 
                onNodeClick={props.onMenuItemClicked} // Pass the handler here
              />
            )}
          </Tree>
        </section>
        <div className="NL_admin_menu_action">
          <button type="button">
            <FaPlusCircle/>사이트맵 추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default SiteMenuView;
