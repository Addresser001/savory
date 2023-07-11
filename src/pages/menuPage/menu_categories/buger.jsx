import './styles.scss';
import { Buger_items } from '../data';
import { star, plus_svg, minus_svg, plus_svg2 } from '../../../assets/svg/svg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/button/button';
import UseGeneralContext from '../../../hooks/useGeneralContext';

const containerVariants = {
  hidden: {
    opacity: 1,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: '0vw',
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Buger = ({ addItemToSummary }) => {
  const { menuItemsSearchQuery } = UseGeneralContext();
  const [filteredBugerItems, setFilteredBugerItems] = useState(
    Buger_items.filter((item) => {
      if (menuItemsSearchQuery === '') {
        return item;
      } else if (
        item.name.toLowerCase().includes(menuItemsSearchQuery.toLowerCase())
      ) {
        return item;
      }
    })
  );

  const handlePlusQuantity = (id) => {
    filteredBugerItems.forEach((item) => {
      if (item.id === id) {
        item.quantity++;
      }
      setFilteredBugerItems([...filteredBugerItems]);
    });
  };

  const handleMinorsQuantity = (id) => {
    filteredBugerItems.forEach((item) => {
      if (item.id === id && item.quantity === 1) {
        item.quantity = 1;
      } else if (item.id === id && item.quantity > 1) {
        item.quantity--;
      }
      setFilteredBugerItems([...filteredBugerItems]);
    });
  };

  return (
    <motion.div
      className='wrapper'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h2 className='header'>Bugers</h2>

      <div className='items_container'>
        {filteredBugerItems.slice(0, 6).map((item) => {
          let { id, img, name, category, price, quantity } = item;

          return (
            <div className='each_item' key={id}>
              <img src={img} alt='item img' />{' '}
              <div className='item_name_and_star_container'>
                <h4>{name}</h4>
                <h6 className='star'>4{star}</h6>
              </div>
              <div className='item_price_and_qty_container'>
                <h4><span className='naira_sign'>N</span>{price?.toLocaleString('en-US')}</h4>
                <h6 className='item_quantity'>
                  <Button
                    text={plus_svg}
                    className='quantity_btn plus'
                    onClick={() => handlePlusQuantity(id)}
                  />
                  {quantity}

                  <Button
                    text={minus_svg}
                    className='quantity_btn  minus'
                    onClick={() => handleMinorsQuantity(id)}
                  />
                </h6>
              </div>
              <button
                className='add_btn'
                onClick={() => addItemToSummary(item)}
              >
                ADD {plus_svg2}
              </button>
            </div>
          );
        })}
      </div>

      <h2 className='header packs_header'>Packs</h2>

      <div className='items_container'>
        {filteredBugerItems.slice(6).map((item) => {
          const { id, img, name, category, desc, price, quantity } = item;
          return (
            <div className='each_item' key={id}>
              <img src={img} alt='item img' />{' '}
              <div className='item_name_and_star_container'>
                <h4>{name}</h4>
                <h6 className='star'>4{star}</h6>
              </div>
              <h6 className='item_description'>{desc}</h6>
              <div className='item_price_and_qty_container'>
                <h4><span className='naira_sign'>N</span>{price?.toLocaleString('en-US')}</h4>
                <h6 className='item_quantity'>
                  <Button
                    text={plus_svg}
                    className='quantity_btn plus'
                    onClick={() => handlePlusQuantity(id)}
                  />
                  {quantity}

                  <Button
                    text={minus_svg}
                    className='quantity_btn  minus'
                    onClick={() => handleMinorsQuantity(id)}
                  />
                </h6>
              </div>
              <button
                className='add_btn'
                onClick={() => addItemToSummary(item)}
              >
                ADD {plus_svg2}
              </button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Buger;
