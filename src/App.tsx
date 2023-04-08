import Intro from './components/Intro/Intro';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
import Menu from './components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* <Head /> */}
      <main>
        <Menu />
        <Intro />
        <SocialMediaLinks />
      </main>
      <Footer />
    </>
  );
}

export default App;
