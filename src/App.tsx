import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import FindUs from './components/FindUs';

const App: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isSignInRoute = location.pathname === '/signin';
  const isAboutInRoute = location.pathname === '/about';
  const isContactInRoute = location.pathname === '/contact';

  return (
    <>
      {!isAdminRoute && !isSignInRoute && <Header />}
      <AppRoutes />
      {!isAdminRoute && !isSignInRoute && !isAboutInRoute && !isContactInRoute && <FindUs />}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
