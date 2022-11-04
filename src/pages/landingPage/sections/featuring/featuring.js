import packages_side_img1 from '../../../../assets/images/packages_side_img1.png';
import packages_side_img2 from '../../../../assets/images/packages_side_img2.png';
import packages_side_img3 from '../../../../assets/images/packages_side_img3.png';
import { Packages } from '../../data/data';
import './styles.scss';
import { Vector_underline } from '../../../../assets/svg/svg';
const Featuring = () => {
  return (
    //Featuring
    <div className='featuring_container'>
      <div className='header_and_text_container'>
        <div className='header'>
          <h4>Featuring</h4>
          {Vector_underline}
        </div>
        <h3>Amazing packages you can share with others and cut cost</h3>
      </div>

      <div className='amazing_packages_content_and_images_container'>
        <div className='packs_container'>
          {Packages.map((pack) => {
            const { title, icon, desc } = pack;
            return (
              <div className='each_pack'>
                <div className='title_and_icon'>
                  <span className='pack_icons'>{icon}</span>
                  <h5>{title}</h5>
                </div>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
        <div className='images_container'>
          <img className='packages_side_img1' src={packages_side_img1} />
          <img className='packages_side_img2' src={packages_side_img2} />
          <img className='packages_side_img3' src={packages_side_img3} />
        </div>
      </div>
    </div>
  );
};

export default Featuring;
