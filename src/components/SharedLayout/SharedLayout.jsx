import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';

const SharedLayout = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Navbar />
        </div>
      </header>

      <Suspense fallback={<p>...Loading</p>}>
        <div className="container">
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};
export default SharedLayout;
