import React from 'react';
import { IDynamicModuleProp } from 'interfaces';
import PageNotFound from 'layout/PageNotFound';

const BaseModule: React.FC<IDynamicModuleProp> = (props) => {
  const componentsMap = props.getComponentsMap();
  const ActionComponent = componentsMap[props.action.toLowerCase()] || null;

  if (!ActionComponent) {
    return <PageNotFound />;
  }

  if (props.id == undefined) {
    return <ActionComponent />;
  } else {
    return <ActionComponent id={props.id} />;
  }
};

export default BaseModule;
