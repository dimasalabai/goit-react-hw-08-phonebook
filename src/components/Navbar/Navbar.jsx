import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import MainMenu from './MainMenu/MainMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { selectIsLogin } from '../../redux/auth/auth-selectors';

import style from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <nav className={style.navbar}>
      <Link to="/">Logo</Link>
      <MainMenu />

      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </nav>
  );
};

export default Navbar;
