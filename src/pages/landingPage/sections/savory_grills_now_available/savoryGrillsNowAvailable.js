import './styles.scss';
import Button from '../../../../components/button/button';
import grill_layer from '../../../../assets/images/img_layer1.png';
import grill1 from '../../../../assets/images/grill1.png';
import grill_layer2 from '../../../../assets/images/img_layer2.png';
import grill2 from '../../../../assets/images/grill2.png';
const SavoryGrillsNowAvaliable = () => {
  return (
    <div className='savory_grills_now_available'>
      <aside className='left_grill_container'>
        <img src={grill_layer} />{' '}
        <img src={grill1} className='left_grill_img' />
      </aside>
      <div className='text'>
        <h2>Savory’s Grills Now Available</h2>
        <p>
          Lectus in sit magnis ultricies. Tortor sagittis ullamcorper in amet
          orci.
        </p>
        <Button
          text='Order Now'
          color='#FFFFFF'
          bColor='#EC5C34'
          padding='15px 50px'
          margin='53px 0px 0px 0px'
          className='order_now_btn'
        />
      </div>
      <aside className='right_grill_container'>
        <img src={grill_layer2} />{' '}
        <img src={grill2} className='right_grill_img' />
      </aside>
    </div>
  );
};

export default SavoryGrillsNowAvaliable;
