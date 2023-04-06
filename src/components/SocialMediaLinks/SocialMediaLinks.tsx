import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import './SocialMediaLinks.scss';

const SocialMediaLinks = () => {
  return (
    <div className='social_links'>
      <div>
        <FiFacebook />
      </div>
      <div>
        <FiInstagram />
      </div>
      <div>
        <AiOutlineTwitter />
      </div>
    </div>
  );
};

export default SocialMediaLinks;
