import './styles.scss';
import BBQ from '../../../../assets/images/BBQ.png';
import { Vector_underline, Arrow } from '../../../../assets/svg/svg';

const WeOfferVarieties = () => {
  return (
    <div className='we_offer_varieties'>
      <div className='header_and_text'>
        <div className='header'>
          <h4>We Offer Varieties</h4>
          {Vector_underline}
        </div>
        <h3>
          Id elit magnis nunc semper tincidunt enim. Enim tincidunt leo sit
          turpis lectus vulputate{' '}
        </h3>
      </div>
      <div className='bbq_chicken_shawama_container'>
        <div className='sub_container'>
          <div className='each_bbq '>
            <img src={BBQ} />
            <p className='with_free_gift span'>With free gift</p>
            <h2>BBQ Chicken Shawama</h2>
            <p className='beef_chicken_suya'>Beef, chicken, suya</p>

            <p className='plus_soft_drink span'>+ soft drink</p>

            <a href='#'>Place your order {Arrow}</a>
          </div>
          <div className='each_bbq middle_bbq'>
            <img src={BBQ} />
            <p className='with_free_gift span'>With free gift</p>
            <h2>BBQ Chicken Shawama</h2>
            <p className='beef_chicken_suya'>Beef, chicken, suya</p>

            <p className='plus_soft_drink span'>+ soft drink</p>

            <a href='#'>Place your order {Arrow}</a>
          </div>
          <div className='each_bbq '>
            <img src={BBQ} />
            <p className='with_free_gift span'>With free gift</p>
            <h2>BBQ Chicken Shawama</h2>
            <p className='beef_chicken_suya'>Beef, chicken, suya</p>

            <p className='plus_soft_drink span'>+ soft drink</p>

            <a href='#'>Place your order {Arrow}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOfferVarieties;
