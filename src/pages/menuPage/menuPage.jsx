import './styles.scss';
import Button from '../../components/button/button';
import Sharwama from './menu_categories/sharwama';
import {
  Search_icon,
  Menu_page_sub_nav_buttons_toggler,
} from '../../assets/svg/svg';
import { useState } from 'react';
import Grills from './menu_categories/grills';
import Bugers from './menu_categories/buger';
import { useContext } from 'react';
import GeneralContext from '../../context/generalContext/GeneralContext';

const MenuPage = () => {
  const [sharwama, isSharwama] = useState(true);
  const [grills, isGrills] = useState(false);
  const [buger, isBuger] = useState(false);
  const { setMenuItemsSearchQuery } = useContext(GeneralContext);

  const searchBar = document.querySelector('#searchBar');

  const Sharwama_btn = () => {
    isGrills(false);
    isBuger(false);
    isSharwama(true);
    setMenuItemsSearchQuery('');
    searchBar.value = '';
  };
  const Grills_btn = () => {
    isGrills(true);
    isBuger(false);
    isSharwama(false);
    setMenuItemsSearchQuery('');
    searchBar.value = '';
  };
  const Buger_btn = () => {
    isGrills(false);
    isBuger(true);
    isSharwama(false);
    setMenuItemsSearchQuery('');
    searchBar.value = '';
  };

  return (
    <div className='menu_container'>
      <div className='buttons_container'>
        <span className='toggler'>{Menu_page_sub_nav_buttons_toggler}</span>
        <Button
          onClick={Sharwama_btn}
          className={`side_btn sharwama_btn ${
            sharwama ? 'btn_onclick_style' : 'side_btn sharwama_btn'
          }`}
          text='Sharwama'
        />{' '}
        <Button
          onClick={Grills_btn}
          className={`side_btn ${grills ? 'btn_onclick_style' : 'side_btn '}`}
          text='Grills'
        />{' '}
        <Button
          onClick={Buger_btn}
          className={`side_btn buger_btn ${
            buger ? 'btn_onclick_style' : 'side_btn buger_btn'
          }`}
          text='Bugers'
        />
      </div>

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
        {sharwama && <Sharwama />}
        {grills && <Grills />}
        {buger && <Bugers />}
      </div>
    </div>
  );
};

export default MenuPage;
