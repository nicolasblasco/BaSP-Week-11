import Admins from '../Admins';
import Users from '../Users';

import Home from '../Home/index';
import Header from '../Header/index';
import Footer from '../Footer/index';
import styles from './layout.module.css';

const Layout = () => {
  let currentScreen = <Home />;
  switch (window.location.pathname) {
    case '/admins':
      currentScreen = <Admins />;
      break;
    case '/users':
      currentScreen = <Users />;
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      <Header />
      {currentScreen}
      <Footer />
    </div>
  );
};

export default Layout;
