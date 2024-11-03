import React from 'react';
import { IDynamicModuleProp } from 'interfaces';
import PageNotFound from 'layout/PageNotFound';

const BaseModule: React.FC<IDynamicModuleProp> = (props) => {
  const componentsMap = props.getComponentsMap();
  const listOfActions = Object.keys(componentsMap);
  const action = props.action != '' ? props.action : listOfActions[0];
  
  //console.log(props);
  const ActionComponent = componentsMap[action] || PageNotFound;

  if (props.id == undefined) {
    return <ActionComponent />;
  } else {
    return <ActionComponent id={props.id} />;
  }
};

export default BaseModule;
