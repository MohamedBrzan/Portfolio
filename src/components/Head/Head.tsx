const HeadNav = () => (
  <div className='logo'>
    <Link to='/'>MohamedB.</Link>
  </div>
);
import { Link } from 'react-router-dom';
import './Head.scss';

const HeadLangs = () => (
  <div className='langs'>
    <span className='lang active'>En.</span>
    <span className='lang'>Ar.</span>
  </div>
);

const Head = () => {
  return (
    <header>
      <HeadNav />
      <HeadLangs />
    </header>
  );
};

export default Head;
