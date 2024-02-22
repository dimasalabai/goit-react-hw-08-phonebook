import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/auth/auth-operations';

import {
  // selectAuthError,
  selectAuthLoading,
  selectIsLogin,
} from '../../redux/auth/auth-selectors';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './login-page.module.css';

import Loader from '../../shared/components/Loader/Loader';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);

  // const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <main className={styles.block}>
      <h1>Login Page</h1>
      {authLoading && <Loader />}
      <LoginForm onSubmit={handleLogin} />

      <ToastContainer />
    </main>
  );
};
export default LoginPage;
