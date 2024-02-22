import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div className="container">
      <h1>Cannot found this page</h1>
      <Link to="/" className={styles.link}>
        To home page
      </Link>
    </div>
  );
};
export default NotFoundPage;
