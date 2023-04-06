import { useRef, MutableRefObject } from 'react';

import HomeAnime from '../../animations/Home/HomeAnime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Intro.scss';

const Intro = () => {
  return (
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
            {/* <h3 className='bg-info' >Moreover I'm In a Relationship with - Edita ❤️✌️</h3> */}
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
  );
};

export default Intro;
