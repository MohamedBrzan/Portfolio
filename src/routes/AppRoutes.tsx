import { Routes, Route } from 'react-router-dom';
import About from '../articles/About/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
