import { AiFillLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { DiGithubAlt } from 'react-icons/di';

import { Link } from 'react-router-dom';
import './SocialMediaLinks.scss';

const SocialMediaLinks = () => {
  return (
    <div className='social_links'>
      <div className='link'>
        <Link to='https://www.linkedin.com/in/mohamed-brzan-01966518a/'>
          <AiFillLinkedin size={20} />
        </Link>
      </div>
      <div className='link'>
        <Link to='https://api.whatsapp.com/send?phone=201113772369'>
          <BsWhatsapp size={20} />
        </Link>
      </div>
      <div className='link'>
        <Link to='mailto: mohamedmahmoudbrzan@gmail.com'>
          <SiGmail size={20} />
        </Link>
      </div>
      <div className='link'>
        <Link to='https://github.com/MohamedBrzan'>
          <DiGithubAlt size={20} />
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
