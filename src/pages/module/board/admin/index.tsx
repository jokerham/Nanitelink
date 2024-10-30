import React from 'react';
import BaseModule from 'component/BaseComponent/BaseModule';
import { IModuleProp } from 'interfaces';
import List from './list';

const ModuleSpecificComponent: React.FC<IModuleProp> = (props) => {
  // Function to return the specific components map for this module
  const getComponentsMap = () => {
    return {
      List
      // view,
      // edit,
      // Add more mappings as needed for this module
    };
  };

  // Render the BaseModule with the appropriate props
  return <BaseModule {...props} getComponentsMap={getComponentsMap} />;
};

export default ModuleSpecificComponent;
