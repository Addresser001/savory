import React, { useEffect, useState } from 'react';
import GeneralContext from './GeneralContext';

const GeneralState = (props) => {
  const [menuItemsSearchQuery, setMenuItemsSearchQuery] = useState('');
  const [orderSummary, setOrderSummary] = useState([]);
  const [monitorOrderQuantityChanges, setMonitorOrderQuantityChanges] =
    useState(false);

  const [showPreviousOrder, setShowPreviousOrder] = useState(true);

  return (
    <GeneralContext.Provider
      value={{
        menuItemsSearchQuery,
        setMenuItemsSearchQuery,
        orderSummary,
        setOrderSummary,
        monitorOrderQuantityChanges,
        setMonitorOrderQuantityChanges,
        showPreviousOrder,
        setShowPreviousOrder,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
