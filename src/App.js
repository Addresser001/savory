import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LANDING_PAGE, MENU_PAGE } from './routes';
import LandingPage from './pages/landingPage';
import TopNavigation from './components/topNavigation/topNavigation';

import './App.css';
import MenuPage from './pages/menuPage/menuPage';
function App() {
  return (
    <div className='App'>
      <TopNavigation />

      <Routes>
        <Route exact path={LANDING_PAGE} element={<LandingPage />} />
        <Route exact path={MENU_PAGE} element={<MenuPage />} />
      </Routes>
    </div>
  );
}

export default App;
