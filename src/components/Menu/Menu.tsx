import { useState } from 'react';
import MenuLinks from './helpers/MenuLinks';
import './Menu.scss';

export interface PropsTypes {
  props: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Menu: React.FC = () => {
  let [open, setOpen] = useState<boolean>(false);

  const stopScrolling = () => {
    let Y = window.scrollY;
    let X = window.scrollX;
    window.addEventListener('scroll', (e: any) => {
      return window.scrollTo(X, Y);
    });

    setOpen(true);
  };

  let data: PropsTypes = {
    props: {
      open,
      setOpen,
    },
  };

  return (
    <div className='menu' onClick={stopScrolling}>
      <div className='lines'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <div className='name'>Menu</div>
      <MenuLinks {...data} />
    </div>
  );
};

export default Menu;
