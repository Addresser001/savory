import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LANDING_PAGE } from './routes';
import LandingPage from './pages/landingPage';
import TopNavigation from './components/topNavigation/topNavigation';
import Footer from './components/footer/footer';
import './App.css';
function App() {
  return (
    <div className='App'>
      <TopNavigation />

      <Router>
        <Routes>
          <Route exact path={LANDING_PAGE} element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
