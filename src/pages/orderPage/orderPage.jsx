import { useEffect, useState } from 'react';
import { star, plus_svg, minus_svg, plus_svg2 } from '../../assets/svg/svg';
import Button from '../../components/button/button';
import { DeleteOutlined } from '@ant-design/icons';
import './styles.scss';
import UseGeneralContext from '../../hooks/useGeneralContext';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },

  exit: {
    opacity: 1,
  },
};
let messageText = '';
let newLine = '%0a';
let textBold = '*';

const OrderPage = () => {
  // const [totalCost, setTotalCost] = useState(0);

  const {
    orderSummary,
    setOrderSummary,
    monitorOrderQuantityChanges,
    setMonitorOrderQuantityChanges,
  } = UseGeneralContext();

  const handlePlusQuantity = (id) => {
    orderSummary.forEach((item) => {
      if (item.id === id) {
        item.quantity++;
      }
      setOrderSummary(orderSummary);
      setMonitorOrderQuantityChanges(!monitorOrderQuantityChanges);
      localStorage.setItem('summary', JSON.stringify(orderSummary));
    });
  };

  const handleMinorsQuantity = (id) => {
    orderSummary.forEach((item) => {
      if (item.id === id && item.quantity === 1) {
        item.quantity = 1;
      } else if (item.id === id && item.quantity > 1) {
        item.quantity--;
      }
      setOrderSummary(orderSummary);
      setMonitorOrderQuantityChanges(!monitorOrderQuantityChanges);
      localStorage.setItem('summary', JSON.stringify(orderSummary));
    });
  };

  const handleDelete = (id) => {
    const filter = orderSummary.filter((order) => order.id !== id);

    setOrderSummary(filter);
    setMonitorOrderQuantityChanges(!monitorOrderQuantityChanges);
    return localStorage.setItem('summary', JSON.stringify(filter));
  };

  const [totalOrderCost, setTotalOrderCost] = useState(0);
  useEffect(() => {
    setTotalOrderCost(
      orderSummary?.reduce(
        (total, currentValue) =>
          (total = total + currentValue.price * currentValue.quantity),
        0
      )
    );

    orderSummary.forEach((sum, idx) => {
      const { name, price, quantity } = sum;
      const subTotal = price * quantity;
      messageText =
        `${messageText}${newLine}` +
        `Order ${
          idx + 1
        }${newLine}Name: ${textBold}${name}${textBold}${newLine}Quantity: ${textBold}${quantity}${textBold}${newLine}${newLine}`;
    });
    if (messageText.length > 1) {
      messageText = messageText + '_Pls write your location:_ ';
    }
  }, [orderSummary]);

  const whatsappUrl = `https://web.whatsapp.com/send?phone=+2349053046284&text=${messageText}&app_absent=0`;

  return (
    <div className='order_page'>
      {orderSummary?.length > 0 ? (
        <>
          <h3 className='order_header'>Your Order</h3>
          <motion.div layout className='summary_not_empty'>
            {orderSummary.map((sum) => {
              const { id, img, name, category, desc, price, quantity } = sum;

              const subTotal = price * quantity;

              return (
                <motion.div
                  layout
                  className='each_item'
                  key={id}
                  variants={containerVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                >
                  <img src={img} alt='item img' />{' '}
                  <div className='text_container'>
                    <div className='item_name'>
                      <h4>{name}</h4>
                      <h6 className='item_description'>{desc}</h6>
                    </div>
                    <div className='item_price_and_qty_container'>
                      <h4>
                        <span className='naira_sign'>N</span>
                        {price?.toLocaleString('en-US')}
                      </h4>
                      <h6 className='item_quantity'>
                        <Button
                          text={minus_svg}
                          className='quantity_btn  minus'
                          onClick={() => handleMinorsQuantity(id)}
                        />
                        {quantity}
                        <Button
                          text={plus_svg}
                          className='quantity_btn plus'
                          onClick={() => handlePlusQuantity(id)}
                        />
                      </h6>
                    </div>

                    <div className='sub_total'>
                      <h4>
                        <span className='naira_sign'>N</span>
                        {subTotal?.toLocaleString('en-US')}
                      </h4>
                      <Button
                        text={<DeleteOutlined />}
                        className='delete_btn'
                        onClick={() => handleDelete(id)}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div className='total_order_cost'>
              <h4>
                TOTAL ORDER COST:{' '}
                <span className='figures'>
                  <span className='naira_sign'>N</span>
                  {totalOrderCost?.toLocaleString('en-US')}
                </span>
              </h4>

              <p className='note'>
                NOTE:{' '}
                <span>
                  Delivery cost is not included in the Total Order Cost!
                </span>
              </p>
            </div>
            <a href={whatsappUrl} target='_blank'>
              <Button text='PLACE ORDER' className='place_order_btn' />
            </a>
          </motion.div>
        </>
      ) : (
        <motion.div layout className='summary_empty'>
          <h1>YOU HAVE NO ORDER AVAILABLE</h1>
        </motion.div>
      )}
    </div>
  );
};

export default OrderPage;
