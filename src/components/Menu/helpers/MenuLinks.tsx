import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuLinks.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { PropsTypes } from '../Menu';
import StartScroll from '../../../functions/StartScroll';

const MenuLinks: React.FC<PropsTypes> = (props) => {
  let { open, setOpen } = props.props;

  function enable() {
    window.onscroll = () => StartScroll();
  }

  const handleClose = () => {
    enable();
    setOpen(false);
  };

  return (
    <div className={open ? 'menu_links active' : 'menu_links'}>
      <div className='actions' onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} size='2xl' className='close_icon' />
      </div>
      <ul className='list-unstyled links'>
        <li className='link'>
          <Link to='#about'>About</Link>
        </li>
        <li className='link'>
          <Link to='/projects'>Projects</Link>
        </li>

        <li className='link'>
          <Link to='/contact_me'>Contact Me</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuLinks;
