import './styles.scss';

import Sharwama from './menu_categories/sharwama';
import { Search_icon } from '../../assets/svg/svg';
import { useState } from 'react';
import Grills from './menu_categories/grills';
import Bugers from './menu_categories/buger';
import { useContext } from 'react';
import GeneralContext from '../../context/generalContext/GeneralContext';
import { motion } from 'framer-motion';
import SideNav from './sideNav/sideNav';

const MenuPage = () => {
  const { setMenuItemsSearchQuery } = useContext(GeneralContext);

  const [activeNav, setActiveNav] = useState(0);

  const tabComponents = [<Sharwama />, <Grills />, <Bugers />];
  return (
    <div className='menu_container'>
      <SideNav activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className='display_template'>
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
  );
};

export default MenuPage;
