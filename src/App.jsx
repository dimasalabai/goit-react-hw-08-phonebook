import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { current } from './redux/auth/auth-operations';

import AppRoutes from 'AppRouters';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
};
