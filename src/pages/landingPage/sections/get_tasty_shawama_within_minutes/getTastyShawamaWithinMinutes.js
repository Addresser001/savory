import CirleSvg from '../../../../assets/svg/circleSvg';
import GetTastyShawama from '../../../../assets/images/get_tasty.png';
import backLayer from '../../../../assets/images/back_layer.png';
import './styles.scss';
import Button from '../../../../components/button/button';
import { Head_icon, Car_icon, Clock_icon } from '../../../../assets/svg/svg';
const GetTastyShawamaWithinMinutes = () => {
  return (
    <div className='get_tasty_shawama'>
      <aside className='left_side_text'>
        <img src={backLayer} className='title_back_layer' />
        <div className='title_and_button_container'>
          <h1>
            Get Tasty <span style={{ color: '#EC5C34' }}>Shawarma</span> Within
            <span style={{ color: '#EC5C34' }}> Minutes</span>
          </h1>

          <div className='buttons_container'>
            <Button
              text='Order Now'
              fontSize='18px'
              bColor=' #FFFFFF'
              boxShadow='-3px 5px 12px 1px rgba(216, 117, 89, 0.25)'
              padding='18px 50px'
              color='#EC5C34'
              className='btn'
            />

            <Button
              text='Call us'
              fontSize='18px'
              bColor=' #316E4D'
              padding='19px 34px'
              color='#FFFFFF'
              boxShadow='0px'
              className='btn'
            />
          </div>
        </div>
      </aside>

      <div className='get_tasty_shawama_image'>
        <span>
          <CirleSvg />
        </span>
        <div className='dotted_circle'>
          <img src={GetTastyShawama} />
        </div>
      </div>

      <aside className='right_side_text_with_icons'>
        <div className='sub_container'>
          <span className='icons'>{Head_icon}</span>
          <p className='text'>
            Get a <span style={{ color: '#EC5C34' }}>Taste</span> you’ll
            remember
          </p>
        </div>
        <div className='sub_container'>
          <span className='icons'>{Car_icon}</span>
          <p className='text'>
            Hassel-free <span style={{ color: '#EC5C34' }}>Delivery</span> to
            your door step
          </p>
        </div>
        <div className='sub_container'>
          <span className='icons'>{Clock_icon}</span>
          <p className='text'>
            Deliver within <span style={{ color: '#EC5C34' }}> 45 minutes</span>
          </p>
        </div>{' '}
      </aside>
    </div>
  );
};

export default GetTastyShawamaWithinMinutes;
