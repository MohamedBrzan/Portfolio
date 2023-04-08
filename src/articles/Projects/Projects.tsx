import Proj1 from '../../assets/projects/pp1.png';
import Proj2 from '../../assets/projects/pp2.png';
import Proj3 from '../../assets/projects/pp3.png';
import Proj4 from '../../assets/projects/pp4.png';
import Proj5 from '../../assets/projects/pp5.png';
import Proj6 from '../../assets/projects/pp6.png';
import Proj7 from '../../assets/projects/pp7.png';
import Proj8 from '../../assets/projects/pp8.png';
import Proj9 from '../../assets/projects/pp9.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Projects.scss';
import { Link } from 'react-router-dom';

const Projects = () => {
  const Data = [
    {
      title: 'Project 1',
      img: Proj1,
      url: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/index-5.html',
    },
    {
      title: 'Project 2',
      img: Proj2,
      url: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/index-6.html',
    },
    {
      title: 'Project 3',
      img: Proj3,
      url: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/index-7.html',
    },
    {
      title: 'Project 4',
      img: Proj4,
      url: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/index-8.html',
    },
    {
      title: 'Project 5',
      img: Proj5,
      url: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/index-9.html',
    },
    {
      title: 'Project 6',
      img: Proj6,
      url: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/index-10.html',
    },
    {
      title: 'Project 7',
      img: Proj7,
      url: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/index-4.html',
    },
    {
      title: 'Project 8',
      img: Proj8,
      url: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/index-3.html',
    },
    {
      title: 'Project 9',
      img: Proj9,
      url: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/index-2.html',
    },
  ];
  return (
    <div className='projects'>
      <div className='title'>
        <h2>
          <b>Proj</b>
        </h2>
        <h2>
          <b>ects</b>
        </h2>
      </div>

      <Container>
        <Row className='projects_images'>
          {Data.map(({ title, img, url }, index) => (
            <Col xs={6} lg={4} xl={3} key={index} className='proj_col'>
              <Link to={`${url}`}>
                <figure>
                  <img src={img} alt={title} title={title} />
                </figure>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
