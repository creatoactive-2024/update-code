import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isSignInRoute = location.pathname === '/signin';

  return (
    <>
      {!isAdminRoute && !isSignInRoute && <Header />}
      <AppRoutes />
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
