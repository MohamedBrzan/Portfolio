import Proj1 from '../../assets/projects/proj1.png';
import Proj2 from '../../assets/projects/proj2.png';
import Proj3 from '../../assets/projects/proj3.png';
import Proj4 from '../../assets/projects/proj4.png';
import Proj5 from '../../assets/projects/proj5.png';
import Proj6 from '../../assets/projects/proj6.png';
import Proj7 from '../../assets/projects/proj7.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Projects.scss';

const Projects = () => {
  const Data = [
    { title: 'Project 1', url: Proj1 },
    { title: 'Project 2', url: Proj2 },
    { title: 'Project 3', url: Proj3 },
    { title: 'Project 4', url: Proj4 },
    { title: 'Project 5', url: Proj5 },
    { title: 'Project 6', url: Proj6 },
    { title: 'Project 7', url: Proj7 },
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
          {Data.map(({ title, url }, index) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index} className='proj_col'>
              <figure>
                <img src={url} alt={title} title={title} />
              </figure>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
