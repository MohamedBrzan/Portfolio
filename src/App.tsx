import { useEffect } from 'react';
import Head from './components/Head/Head';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Intro from './components/Intro/Intro';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <Container fluid className='app_container'>
      <Head />
      <main>
        <Menu />
        <Intro />
        <SocialMediaLinks />
      </main>
    </Container>
  );
}

export default App;
