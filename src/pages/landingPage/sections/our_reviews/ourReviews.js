import { reviews } from '../../data/data';

import { Vector_underline } from '../../../../assets/svg/svg';
import './styles.scss';
const OurReviews = () => {
  return (
    <div className='our_reviews'>
      <div className='header'>
        <h4>Our Reviews</h4>
        {Vector_underline}
      </div>

      <div className='sub_container'>
        <div className='review_container'>
          {reviews.map((review) => {
            const { img, name, address, desc, transform } = review;
            return (
              <div
                className='each_review'
                style={{
                  transform: transform,
                }}
              >
                <div className='review_img_and_name'>
                  <img src={img} alt='review pics' />
                  <div className='review_name_and_address'>
                    <h4>{name}</h4>
                    <h6>{address}</h6>
                  </div>
                </div>

                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurReviews;
