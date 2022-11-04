import './styles.scss';

import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';
import GetTastyShawamaWithinMinutes from './sections/get_tasty_shawama_within_minutes/getTastyShawamaWithinMinutes';
import WeOfferVarieties from './sections/we_offer_varieties/weOfferVarieties';
import SavoryGrillsNowAvaliable from './sections/savory_grills_now_available/savoryGrillsNowAvailable';
import Featuring from './sections/featuring/featuring';
import AvoidQueues from './sections/avoid_queues/avoidQueues';
import WeAreCurrentlyAvailable from './sections/we_are_currently_available/weAreCurrrentlyAvailble';
import OurReviews from './sections/our_reviews/ourReviews';

const LandingPage = () => {
  return (
    <div className='landing_page'>
      <GetTastyShawamaWithinMinutes />
      <div className='we_offer_varieties_and_savory_grills_now_available_and_featuring_container'>
        <WeOfferVarieties />

        <SavoryGrillsNowAvaliable />

        <Featuring />
      </div>

      <AvoidQueues />

      <WeAreCurrentlyAvailable />

      <OurReviews />

      <Footer />
    </div>
  );
};

export default LandingPage;
