import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HTML from '../../assets/techsIcons/html.svg';
import CSS from '../../assets/techsIcons/css.svg';
import Bootstrap from '../../assets/techsIcons/bootstrap.svg';
import JS from '../../assets/techsIcons/js.svg';
import ReactJs from '../../assets/techsIcons/react.svg';
import Sass from '../../assets/techsIcons/sass.svg';
import MUI from '../../assets/techsIcons/mui.svg';
import Redux from '../../assets/techsIcons/redux.svg';
import Vitejs from '../../assets/techsIcons/vitejs.svg';

import './Techs.scss';

const Techs = () => {
  const Data = [
    { title: 'HTML5', url: HTML },
    { title: 'CSS', url: CSS },
    { title: 'Bootstrap', url: Bootstrap },
    { title: 'JS', url: JS },
    { title: 'React.js', url: ReactJs },
    { title: 'Sass', url: Sass },
    { title: 'MUI', url: MUI },
    { title: 'Redux', url: Redux },
    { title: 'Vitejs', url: Vitejs },
  ];
  return (
    <div className='techs'>
      <div className='title'>
        <h2>
          <b>Te</b>
        </h2>
        <h2>
          <b>Chs</b>
        </h2>
      </div>

      <Row className='techs_svg'>
        {Data.map(({ title, url }, index) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {' '}
            <figure key={index}>
              <img src={url} alt={title} title={title} />
            </figure>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Techs;
