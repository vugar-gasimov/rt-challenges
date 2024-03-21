import { Suspense } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='bg-gradient-to-r from-custom-gradient-start via-custom-gradient-middle to-custom-gradient-end'>
      <Header />
      <Suspense fallback={'Loading... '}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
