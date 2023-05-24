import styles from './header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.brand}>Radium Rocket</div>
        <div>
          <a href={'https://www.facebook.com/radiumrocket'} target={'_blank'} rel="noreferrer">
            <img
              className={styles.socialIcon}
              src={`${process.env.PUBLIC_URL}/assets/images/facebook.svg`}
            />
          </a>
          <a href={'https://twitter.com/radiumrocket'} target={'_blank'} rel="noreferrer">
            <img
              className={styles.socialIcon}
              src={`${process.env.PUBLIC_URL}/assets/images/twitter.svg`}
            />
          </a>
          <a href={'https://www.instagram.com/radium.rocket/'} target={'_blank'} rel="noreferrer">
            <img
              className={styles.socialIcon}
              src={`${process.env.PUBLIC_URL}/assets/images/instagram.svg`}
            />
          </a>
        </div>
      </div>
      <nav className={styles.navbar}>
        <h1 className={styles.appName}>MegaRocket</h1>
        <ul className={styles.rutes}>
          <li>
            <a href={'/'}>Home</a>
          </li>
          <li>
            <a href={'/admins'}>Admins</a>
          </li>
          <li>
            <a href={'/users'}>Users</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
