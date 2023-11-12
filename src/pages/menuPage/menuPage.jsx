import './styles.scss';

import Sharwama from './menu_categories/sharwama';
import { Search_icon } from '../../assets/svg/svg';
import { useEffect, useState } from 'react';
import Grills from './menu_categories/grills';
import Bugers from './menu_categories/buger';
import UseGeneralContext from '../../hooks/useGeneralContext';
import { motion } from 'framer-motion';
import SideNav from './sideNav/sideNav';
import Button from '../../components/button/button';

const MenuPage = () => {
  const {
    setMenuItemsSearchQuery,
    orderSummary,
    setOrderSummary,
    setShowPreviousOrder,
  } = UseGeneralContext();

  const [activeNav, setActiveNav] = useState(0);

  const addItemToSummary = (item) => {
    setOrderSummary([...orderSummary, item]);
    const filter = orderSummary.filter((order) => order.id !== item.id);
    console.log(orderSummary);
    setOrderSummary([item, ...filter]);
    let userOrder = [item, ...filter];
    return localStorage.setItem('summary', JSON.stringify(userOrder));
  };

  const tabComponents = [
    <Sharwama addItemToSummary={addItemToSummary} />,
    <Grills addItemToSummary={addItemToSummary} />,
    <Bugers addItemToSummary={addItemToSummary} />,
  ];

  return (
    <>
      <div className='menu_container'>
        <SideNav activeNav={activeNav} setActiveNav={setActiveNav} />
        <div className='display_template'>
          <Button
            text='Previous Order'
            onClick={() => setShowPreviousOrder(true)}
            className='previous_order_btn'
          />

          <div className='search_container'>
            <input
              id='searchBar'
              type='text'
              placeholder='Search items...'
              autoFocus
              onChange={(event) => setMenuItemsSearchQuery(event.target.value)}
            />
            <span>{Search_icon}</span>
          </div>

          {tabComponents[activeNav]}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
