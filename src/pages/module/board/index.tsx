import React from 'react';
import BaseModule from 'component/BaseComponent/BaseModule';

// Dedicated components specific to this module
// import view from './view';
// import edit from './edit';
import { IModuleProp } from 'interfaces';

const ModuleSpecificComponent: React.FC<IModuleProp> = (props) => {
  // Function to return the specific components map for this module
  const getComponentsMap = () => {
    return {
      // view,
      // edit,
      // Add more mappings as needed for this module
    };
  };

  // Render the BaseModule with the appropriate props
  return <BaseModule {...props} getComponentsMap={getComponentsMap} />;
};

export default ModuleSpecificComponent;
