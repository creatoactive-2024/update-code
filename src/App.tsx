import React, { useEffect, useState } from 'react';
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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isAdminRoute && !isSignInRoute && <Header />}
      <AppRoutes />
      {!isAdminRoute && !isSignInRoute && !isAboutInRoute && !isContactInRoute && <FindUs />}
      {!isAdminRoute && !(isSignInRoute && isMobile) && <Footer />}
    </>
  );
};

export default App;

