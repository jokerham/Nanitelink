import { Tree, NodeRendererProps } from 'react-arborist';
import { FaFolder, FaFolderOpen, FaPlusCircle } from 'react-icons/fa';
import { CgMenuBoxed } from 'react-icons/cg';
import { ButtonBlackSmall, TextFieldFocusRedBorderSmall } from 'component/CustomMaterialUI';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { SiteMapTreeNode } from './SiteMapTreeNode';

const Node: React.FC<NodeRendererProps<SiteMapTreeNode>> = ({node, style, dragHandle}) => {  
  const hasChildren = node.children?.length ?? 0 > 0;
  const isClosed = node.isClosed;
  const nodeName = node.data.name;
  const active = node.data.active ? 'active' : '';
  
  const icon = hasChildren ? (isClosed ? <FaFolder /> : <FaFolderOpen />) : <CgMenuBoxed />;
  
  return (
    <div style={style} ref={dragHandle as React.Ref<HTMLDivElement>}>
      <span className={`NL_admin_menu_node ${active}`}>
        <span className='icon'>{ icon }</span>
        <span>{ nodeName }</span>
      </span>
    </div>
  );
};

const SiteMenuView = () => {
  const calculateHeight = () => {
    return window.innerHeight - 220;  
  };

  const [height, setHeight] = useState(calculateHeight());

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

  const treeData = [
    { id: '1', name: 'Main Menu', active: true, children: [
      {id: '2', name: 'Home'},
      {id: '3', name: 'Board', children: [
        {id: '4', name: 'Announcement'},        
      ]},
      {id: '5', name: 'Development'},
    ]}
  ];

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
            initialData={treeData}
            width={320}
            height={height}
            indent={20}
            padding={5}
            rowHeight={22}
          >
            {Node}
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
