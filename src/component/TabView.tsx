import { IoClose } from 'react-icons/io5';

interface TabViewProps {
  title: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  closeable?: boolean;
  onClose?: () => void;
}

const TabView = (props: TabViewProps) => {
  const { title, header, children, closeable, onClose } = props;
  
  return (
    <div className="NL_admin_menu_tab">
      <div className="NL_admin_menu_tab_header">
        <h1>
          {title}
          {/* <a className="" href="" target="_blank">도움말</a> */}
        </h1>
        { closeable && onClose != undefined && <IoClose onClick={onClose}/>}
      </div>
      { header }
      <div className="NL_admin_menu_content">
        { children }
      </div>
    </div>
  );
};

export default TabView;