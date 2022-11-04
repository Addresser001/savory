import { thong } from '../../assets/svg/svg';
import dash_waves from '../../assets/images/dash_waves2.png';
import './styles.scss';
const Footer = () => {
  const our_services = [
    { header: 'Our Services' },

    {
      name: 'About us',
      address: '#',
    },
    {
      name: 'Our Work',
      address: '#',
    },
    {
      name: 'Our Menu',
      address: '#',
    },
    {
      name: 'Help Center',
      address: '#',
    },
  ];

  const company = [
    { header: 'Company' },

    {
      name: 'Terms of Use',
      address: '#',
    },
    {
      name: 'Contact Us',
      address: '#',
    },
  ];

  const reach_us = [
    { header: 'Reach Us' },

    {
      name: 'Facebook',
      address: '#',
    },
    {
      name: 'Twitter',
      address: '#',
    },
    {
      name: "What'sApp",
      address: ' ',
    },
    {
      name: 'LinkedIn',
      address: ' ',
    },
  ];
  return (
    <div className='footer'>
      <div className='sub_container'>
        <div className='header_and_sub_text_container'>
          <span className='thong'>{thong}</span>
          <h2>Savory</h2>
          <p>
            Pulvinar venenatis viverra tristique imperdiet mus. Ut aenean
            imperdiet volutpat fringilla a, vitae vel blandit duis.
          </p>
        </div>
        <div className='list_of_services_and_links'>
          <ul>
            {our_services.map((link) => {
              return (
                <>
                  <h6>{link.header}</h6>

                  <li>
                    <a href='#'>{link.name}</a>
                  </li>
                </>
              );
            })}
          </ul>
          <ul>
            {company.map((link) => {
              return (
                <>
                  <h6>{link.header}</h6>

                  <li>
                    <a href='#'>{link.name}</a>
                  </li>
                </>
              );
            })}
          </ul>
          <ul>
            {reach_us.map((link) => {
              return (
                <>
                  <h6>{link.header}</h6>

                  <li>
                    <a href='#'>{link.name}</a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <img src={dash_waves} className='dash_waves2' />
    </div>
  );
};

export default Footer;
