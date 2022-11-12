import './styles.scss';
import { Sharwama_items, Sharwama_packs_menu_items } from '../../data';
import {
  star,
  plus_svg,
  minus_svg,
  plus_svg2,
} from '../../../../assets/svg/svg';
import Button from '../../../../components/button/button';
import GeneralContext from '../../../../context/generalContext/GeneralContext';
import { useContext } from 'react';
const Bugers = () => {
  const { menuItemsSearchQuery } = useContext(GeneralContext);
  const filtered_sharwama_items = Sharwama_items.filter((item) => {
    if (menuItemsSearchQuery === '') {
      return item;
    } else if (
      item.name.toLowerCase().includes(menuItemsSearchQuery.toLowerCase())
    ) {
      return item;
    }
  });

  const filtered_sharwama_packs_item = Sharwama_packs_menu_items.filter(
    (item) => {
      if (menuItemsSearchQuery === '') {
        return item;
      } else if (
        item.name.toLowerCase().includes(menuItemsSearchQuery.toLowerCase())
      ) {
        return item;
      }
    }
  );
  return (
    <div className='bugers'>
      <h2 className='header'>Bugers</h2>

      <div className='items_container'>
        {filtered_sharwama_items.map((item) => {
          const { id, img, name, category, price, quantity } = item;
          return (
            <div className='each_item' key={id}>
              <img src={img} alt='item img' />{' '}
              <div className='item_name_and_star_container'>
                <h4>{name}</h4>
                <h6 className='star'>4 {star}</h6>
              </div>
              <div className='item_price_and_qty_container'>
                <h4>{price}</h4>
                <h6 className='item_quantity'>
                  <Button text={plus_svg} className='quantity_btn plus' />
                  {quantity}

                  <Button text={minus_svg} className='quantity_btn  minus' />
                </h6>
              </div>
              <button className='add_btn'>ADD {plus_svg2}</button>
            </div>
          );
        })}
      </div>

      <h2 className='header packs_header'>Sides</h2>

      <div className='items_container'>
        {filtered_sharwama_packs_item.map((item) => {
          const { id, img, name, category, desc, price, quantity } = item;
          return (
            <div className='each_item' key={id}>
              <img src={img} alt='item img' />{' '}
              <div className='item_name_and_star_container'>
                <h4>{name}</h4>
                <h6 className='star'>4 {star}</h6>
              </div>
              <h6 className='item_description'>{desc}</h6>
              <div className='item_price_and_qty_container'>
                <h4>{price}</h4>
                <h6 className='item_quantity'>
                  <Button text={plus_svg} className='quantity_btn plus' />
                  {quantity}

                  <Button text={minus_svg} className='quantity_btn  minus' />
                </h6>
              </div>
              <button className='add_btn'>ADD {plus_svg2}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bugers;
