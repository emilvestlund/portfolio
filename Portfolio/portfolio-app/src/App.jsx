import Content from './components/Content/Content.jsx';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import SocialIcons from './components/SocialIcons/SocialIcons.jsx';

import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />

      <div className={styles.centerWrapper}>
        <div className={styles.gridContainer}>
          <Logo />
          <Content />
          <SocialIcons />
        </div>
      </div>
    </>
  );
}

export default App;
