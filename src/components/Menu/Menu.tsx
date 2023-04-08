import { useState } from 'react';
import MenuLinks from './helpers/MenuLinks';
import './Menu.scss';
import StopScroll from '../../functions/StopScroll';

export type PropsTypes = {
  props: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const Menu: React.FC = () => {
  let [open, setOpen] = useState<boolean>(false);

  const stopScrolling = () => {
    setOpen(true);
    StopScroll();
  };

  let data: PropsTypes = {
    props: {
      open,
      setOpen,
    },
  };

  return (
    <>
      <div className='menu' onClick={stopScrolling}>
        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <div className='name'>Menu</div>
      </div>
      <MenuLinks {...data} />
    </>
  );
};

export default Menu;
