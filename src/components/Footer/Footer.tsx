import './Footer.scss';
import WhatsApp from '../../assets/contact/whatsapp.svg';
import Gmail from '../../assets/contact/gmail.svg';
import Github from '../../assets/contact/github.svg';

const Footer = () => {
  return (
    <footer>
      <div className='rights'>
        All rights reserved {new Date().getUTCFullYear()}
      </div>

      <div className='contact whatsapp'>
        <figure>
          <img width={20} src={WhatsApp} alt='WhatsApp Icon .' /> :
          +201113772369
        </figure>
      </div>

      <div className='contact gmail'>
        {' '}
        <figure>
          <img width={20} src={Gmail} alt='Gmail Icon .' /> :
          mohamedmahmoudbrzan@gmail.com
        </figure>
      </div>
      <div className='contact gmail'>
        {' '}
        <figure>
          <img width={20} src={Github} alt='Gmail Icon .' /> :
          mohamedbrzan11@gmail.com
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
