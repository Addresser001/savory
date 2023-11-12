import { Button, Modal } from 'antd';
import './styles.scss';
import { useState, useEffect } from 'react';
import UseGeneralContext from '../../../hooks/useGeneralContext';

let messageText = '';
let newLine = '%0a';
let textBold = '*';
const PreviousOrder = () => {
  const { showPreviousOrder, setShowPreviousOrder, orderSummary } =
    UseGeneralContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setShowPreviousOrder(false);
  };
  const handleCancel = () => {
    setShowPreviousOrder(false);
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
      const { id, img, name, category, desc, price, quantity } = sum;
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
    <div className='previous_order'>
      <Modal
        title='Your Previous Order'
        open={showPreviousOrder}
        onOk={handleOk}
        onCancel={handleCancel}
        className='previous_order_modal'
        width='50%'
        okText='RESEND ORDER'
        cancelText='CLOSE'
      >
        {/* {orderSummary?.length > 0 ? (
        <> */}

        <div layout className='previous_order_not_empty'>
          {orderSummary.map((sum) => {
            const { id, img, name, category, desc, price, quantity } = sum;

            const subTotal = price * quantity;

            return (
              <div className='each_item' key={id}>
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
                      Quantity: <span>{quantity}</span>
                    </h6>
                  </div>

                  <div className='sub_total'>
                    <h4>
                      <span className='naira_sign'>N</span>
                      {subTotal?.toLocaleString('en-US')}
                    </h4>
                  </div>
                </div>
              </div>
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
            <p className='note'>NOTE: <span>Delivery cost is not included in the Total Order Cost!</span></p>
          </div>
          <a href={whatsappUrl} target='_blank'>
            <Button text='PLACE ORDER' className='place_order_btn' />
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default PreviousOrder;
