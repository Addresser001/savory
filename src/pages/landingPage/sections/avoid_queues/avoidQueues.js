import Button from '../../../../components/button/button';
import dashed_line from '../../../../assets/images/dashed_line.png';
import dash_waves from '../../../../assets/images/dash_waves.png';
import { queues, bike1 } from '../../../../assets/svg/svg';
import './styles.scss';
const AvoidQueues = () => {
  return (
    <div className='avoid_queues'>
      <img src={dash_waves} className='dash_waves' />
      <div className='text_container'>
        <img src={dashed_line} className='dashed_line' />
        <div className='text'>
          <h2>
            Avoid <span>{queues}</span> in sharwama joints
          </h2>
          <p>
            Facilisi at id ornare viverra tempor elit amet. Habitant vitae
            pulvinar nibh vestibulum tellus nunc nisi quis. pulvinar nibh
            vestibulum tellus nunc nisi quis.
          </p>
          <p className='second_paragraph'>
            Facilisi at id ornare viverra tempor elit amet. Habitant vitae
            pulvinar nibh vestibulum tellus nunc nisi quis. pulvinar nibh
            vestibulum tellus nunc nisi quis.
          </p>
        </div>

        <div className='button_container'>
          <a href='#'>Contact Delivery Support</a>
          <Button
            text='Place an Order'
            bColor='#EC5C34'
            color='#ffffff'
            className='place_an_order_btn'
          />
        </div>
      </div>

      <div className='bike1'>{bike1}</div>
    </div>
  );
};

export default AvoidQueues;
