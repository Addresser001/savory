import './styles.scss';
import Button from '../../../components/button/button';
import GeneralContext from '../../../context/generalContext/GeneralContext';
import { useContext } from 'react';
import { Menu_page_sub_nav_buttons_toggler } from '../../../assets/svg/svg';
import { motion } from 'framer-motion';

const SideNav = ({ activeNav, setActiveNav }) => {
  const searchBar = document.querySelector('#searchBar');
  const { setMenuItemsSearchQuery } = useContext(GeneralContext);
  const handleActiveNav = (id) => {
    setActiveNav(id);
    setMenuItemsSearchQuery('');
    searchBar.value = '';
  };

  return (
    <div className='sideNav'>
      <div className='sideNav_buttons_container'>
        <span className='toggler'>{Menu_page_sub_nav_buttons_toggler}</span>
        <Button
          onClick={() => handleActiveNav(0)}
          className={
            activeNav == 0 ? 'activeBtn sharwama_btn' : 'button sharwama_btn'
          }
          text='Sharwama'
        />{' '}
        <Button
          onClick={() => handleActiveNav(1)}
          className={activeNav == 1 ? 'activeBtn' : 'button'}
          text='Grills'
        />{' '}
        <Button
          onClick={() => handleActiveNav(2)}
          className={
            activeNav == 2 ? 'activeBtn buger_btn' : 'button buger_btn'
          }
          text='Bugers'
        />
      </div>
    </div>
  );
};

export default SideNav;
