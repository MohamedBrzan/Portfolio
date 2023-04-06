import { useRef, MutableRefObject, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuLinks.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { PropsTypes } from '../Menu';

const MenuLinks: React.FC<PropsTypes> = (props) => {
  let { open, setOpen } = props.props;
  const menuLinksRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleClose = () => setOpen(false);

  return (
    <div
      className={open ? 'menu_links active' : 'menu_links'}
      ref={menuLinksRef}
    >
      <div className='actions' onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} size='2xl' className='close_icon' />
      </div>
      <ul className='list-unstyled links'>
        <li className='link'>About</li>
        <li className='link'>Projects</li>
        <li className='link'>Jobs</li>
        <li className='link'>Contact Us</li>
      </ul>
    </div>
  );
};

export default MenuLinks;
