import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LANDING_PAGE, MENU_PAGE, ORDER_PAGE } from './routes';
import LandingPage from './pages/landingPage';
import TopNavigation from './components/topNavigation/topNavigation';
import { useEffect } from 'react';

import './App.css';
import MenuPage from './pages/menuPage/menuPage';
// import 'antd/dist/reset.css';
import OrderPage from './pages/orderPage/orderPage';
import UseGeneralContext from './hooks/useGeneralContext';
import PreviousOrder from './pages/orderPage/previousOrder/previousOrder';
function App() {
  const { setOrderSummary, monitorOrderQuantityChanges } = UseGeneralContext();

  useEffect(() => {
    const getOrderSummary = localStorage.getItem('summary');
    const summary = JSON.parse(getOrderSummary);

    if (summary?.length > 0) {
      setOrderSummary(summary);
    }
  }, [monitorOrderQuantityChanges]);
  return (
    <div className='App'>
      <TopNavigation />
      <PreviousOrder />
      <Routes>
        <Route exact path={LANDING_PAGE} element={<LandingPage />} />
        <Route path={MENU_PAGE} element={<MenuPage />} />
        <Route path={ORDER_PAGE} element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
