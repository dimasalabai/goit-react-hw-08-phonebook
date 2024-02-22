import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Loader from '../../shared/components/Loader/Loader';
import RegisterForm from 'components/RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/auth-operations';

import {
  // selectAuthError,
  selectAuthLoading,
  selectIsLogin,
} from '../../redux/auth/auth-selectors';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './register-page.module.css';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);

  // const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      <h1 className={styles.title}>Please Sign up</h1>
      {authLoading && <Loader />}
      <RegisterForm onSubmit={handleSignup} />
      {/* {authError && <p>{authError}</p>} */}
      <ToastContainer />
    </main>
  );
};
export default RegisterPage;
