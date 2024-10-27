import React from 'react';
import { IDynamicModuleProp } from 'interfaces';
import PageNotFound from 'layout/PageNotFound';

const BaseModule: React.FC<IDynamicModuleProp> = ({ id, action, getComponentsMap }) => {
  const componentsMap = getComponentsMap();
  const ActionComponent = componentsMap[action.toLowerCase()] || null;

  if (!ActionComponent) {
    return <PageNotFound />;
  }

  return <ActionComponent id={id} />;
};

export default BaseModule;