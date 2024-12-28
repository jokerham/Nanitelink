import React from 'react';
import BaseModule from 'component/BaseComponent/BaseModule';

// Dedicated components specific to this module
import View from './view';
import Edit from './edit';
import Detail from './detail';
import { IModuleProp } from 'interfaces';

const ModuleSpecificComponent: React.FC<IModuleProp> = (props) => {

  // Function to return the specific components map for this module
  const getComponentsMap = () => {
    return {
      View,
      'Add': Edit,
      'Edit': Edit,
      Detail,
      // Add more mappings as needed for this module
    };
  };

  // Render the BaseModule with the appropriate props
  return <BaseModule {...props} getComponentsMap={getComponentsMap} />;
};

export default ModuleSpecificComponent;
