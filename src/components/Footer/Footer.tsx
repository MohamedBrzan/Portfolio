import './Footer.scss';
import WhatsApp from '../../assets/contact/whatsapp.svg';
import Gmail from '../../assets/contact/gmail.svg';
import Github from '../../assets/contact/github.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer>
      <div className='rights'>
        All rights reserved {new Date().getUTCFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
