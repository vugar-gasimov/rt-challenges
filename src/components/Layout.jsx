import { Suspense } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={'Loading... '}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
