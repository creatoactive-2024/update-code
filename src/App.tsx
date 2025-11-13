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
  const isForgotPassRoute = location.pathname === '/forgotpassword';
  // const isResetPassRoute = location.pathname === '/resetpassword';
  const isResetPassRoute = location.pathname.startsWith("/resetpassword");
  const isPassupdateRoute = location.pathname === '/passwordupdate';
  const isAboutInRoute = location.pathname === '/about';
  const isContactInRoute = location.pathname === '/contact';
  const isTandCInRoute = location.pathname === '/termsandCondition';
  const isDriverDashboardRoute = location.pathname === '/dashboard';
  const isProgressTaskRoute = location.pathname === '/progresstask';

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isAdminRoute &&
        !isSignInRoute &&
        !isForgotPassRoute &&
        !isResetPassRoute &&
        !isPassupdateRoute && 
        !isDriverDashboardRoute &&
        !isProgressTaskRoute && <Header />}

      <AppRoutes />

      {!isAdminRoute &&
        !isSignInRoute &&
        !isAboutInRoute &&
        !isContactInRoute &&
        !isForgotPassRoute &&
        !isResetPassRoute &&
        !isPassupdateRoute && 
        !isTandCInRoute &&
        !isDriverDashboardRoute &&
        !isProgressTaskRoute && <FindUs />}

      {!isAdminRoute &&
        !(isSignInRoute && isMobile) &&
        !(isForgotPassRoute && isMobile) &&
        !(isResetPassRoute && isMobile) &&
        !(isPassupdateRoute && isMobile) && <Footer />}
    </>
  );
};

export default App;

