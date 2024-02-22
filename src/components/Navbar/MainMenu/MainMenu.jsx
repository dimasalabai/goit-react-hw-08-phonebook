import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { selectIsLogin } from '../../../redux/auth/auth-selectors';

import menuItems from '../menuItems';

import styles from './main-menu.module.css';

const MainMenu = () => {
  const isLogin = useSelector(selectIsLogin);

  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={styles.link} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <header className={styles.header}>
      <div className="container">
        <ul className={styles.menu}>{elements}</ul>
      </div>
    </header>
  );
};
export default MainMenu;
