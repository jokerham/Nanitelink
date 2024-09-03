interface TabViewProps {
  title: string;
  header?: React.ReactNode;
  children?: React.ReactNode;

}

const TabView = (props: TabViewProps) => {
  const { title, header, children } = props;
  
  return (
    <div className="NL_admin_menu_tab">
      <h1>
        {title}
        {/* <a className="" href="" target="_blank">도움말</a> */}
      </h1>
      { header }
      <div className="NL_admin_menu_content">
        { children }
      </div>
    </div>
  );
};

export default TabView;