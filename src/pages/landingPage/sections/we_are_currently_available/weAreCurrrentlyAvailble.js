import { base_location_set1, base_location_set2 } from '../../data/data';
import './styles.scss';
import bike2 from '../../../../assets/images/bike2.png';
import { white_dot } from '../../../../assets/svg/svg';
const WeAreCurrentlyAvailable = () => {
  return (
    <div className='we_are_currently_available'>
      <img src={bike2} className='bike2' />

      <div className='text_container'>
        <div className='text'>
          <h3>We are currently available in Port Harcourt</h3>
          <p>
            Delivery fee to our base locations is <span>500 Naira</span> only
          </p>
        </div>
        <div className='base_location'>
          <div className='base_location_set'>
            {base_location_set1.map((base) => {
              const { location } = base;
              return (
                <p className='location'>
                  <span>{white_dot}</span>
                  {location}
                </p>
              );
            })}
          </div>
          <div className='base_location_set'>
            {base_location_set2.map((base) => {
              const { location } = base;
              return (
                <p className='location '>
                  <span>{white_dot}</span>
                  {location}
                </p>
              );
            })}
          </div>
        </div>

        <a href='#'>View Locations And Prices</a>
      </div>
    </div>
  );
};

export default WeAreCurrentlyAvailable;
