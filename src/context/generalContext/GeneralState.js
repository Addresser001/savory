import React, { useEffect, useState } from 'react';
import GeneralContext from './GeneralContext';

const GeneralState = (props) => {
  const [menuItemsSearchQuery, setMenuItemsSearchQuery] = useState('');

  return (
    <GeneralContext.Provider
      value={{ menuItemsSearchQuery, setMenuItemsSearchQuery }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
