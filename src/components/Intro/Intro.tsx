import HomeAnime from '../../animations/Home/HomeAnime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Intro.scss';
import AppRoutes from '../../routes/AppRoutes';
import Container from 'react-bootstrap/Container';
import About from '../../articles/About/About';
import Techs from '../../articles/Techs/Techs';
import Projects from '../../articles/Projects/Projects';

const Intro = () => {
  return (
    <Container fluid className='p-5'>
      <div className='intro'>
        <div className='squares'>
          <div className='sq_1' id='sq1'>
            <div className='content' id='introContent'>
              <div className='headline'>Hi 👋, I'm</div>
              <h1 className='fullName'>
                <strong>Mohamed Brzan</strong>
              </h1>
              <h2 className='job_title'>
                <small>Web Developer</small>
              </h2>
            </div>
            <div className='scroll'>
              <FontAwesomeIcon icon={faArrowLeft} className='arrow_icon' />
              <span>scroll</span>
            </div>
            <HomeAnime />
          </div>
          <div className='sq_2' id='sq2'></div>
        </div>
      </div>
      <About />
      <Techs />
      <Projects />
    </Container>
  );
};

export default Intro;
