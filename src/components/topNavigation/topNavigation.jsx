import './styles.scss';
import { Logo } from '../.././assets/svg/svg.js';
import { motion, useCycle, variants } from 'framer-motion';
import ToggleBtn from './toggleButtons';
import { useEffect, useState } from 'react';
import { NavItems } from './navItems';
import { NavLink as Link } from 'react-router-dom';
import UseGeneralContext from '../../hooks/useGeneralContext';

const sidebarVariants = {
  open: {
    // clipPath: `circle(133.6% at 93% 4%)`,
    clipPath: `inset(0 0 0 0%)`,

    transition: {
      duration: 0.4,
    },
  },

  closed: {
    // clipPath: `circle(5.3% at 100% -10%)`,
    clipPath: `inset(0 0 0 100%)`,

    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
};

const navULVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },

  closed: {
    transition: {
      staggerChildren: 0.05,
      delayDirection: -1,
    },
  },
};
const navItemsVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },

  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const TopNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [toggleIcon, setToggleIcon] = useState(false);

  const navlinks = () => {
    toggleOpen();
    setToggleIcon(!toggleIcon);
  };

  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     textDecoration: isActive ? 'underline' : 'none',
  //     fontWeight: isActive ? '600' : '400',
  //   };
  // };

  const { orderSummary } = UseGeneralContext();
  return (
    <motion.div className='top_navigation'>
      <motion.nav className='desktop_view'>
        <div className='logo'>{Logo}</div>
        <ul>
          {NavItems.map((items) => {
            const { link, caption, numberOfOrder } = items;

            return (
              <li>
                <Link
                  end
                  to={link}
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  {caption}
                  {caption === 'Order' && (
                    <span className='number_of_ordered_items'>
                      {orderSummary.length}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>

      <div
        className='mobile_view_main_container'
        style={
          isOpen
            ? {
                backgroundColor: '#42231ba1',
                transitionDuration: '0.1s',
                height: '100%',
              }
            : {
                transitionDuration: '0.2s',
                transitionDelay: '0.2s',
                height: '0px',
              }
        }
      >
        <div className='toggler_and_logo'>
          <div className='sub_container'>
            <div className='logo'>{Logo}</div>
            <ToggleBtn
              toggle={() => toggleOpen()}
              toggleIcon={toggleIcon}
              setToggleIcon={setToggleIcon}
            />
          </div>
        </div>
        <motion.div
          className='mobile_view'
          variants={sidebarVariants}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
        >
          <motion.ul variants={navULVariants}>
            {NavItems.map((items) => {
              const { link, caption } = items;

              return (
                <motion.li variants={navItemsVariants}>
                  <Link to={link} activeClassName='active '>
                    <span onClick={() => navlinks()}>{caption}</span>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopNavigation;
