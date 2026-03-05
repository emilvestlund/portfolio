import Content from '../Content/Content.jsx';
import GithubRepos from '../githubRepos/GithubRepos.jsx';
import Header from '../Header/Header.jsx';
import Logo from '../Logo/Logo.jsx';
import SocialIcons from '../SocialIcons/SocialIcons.jsx';
import styles from './App.module.css';


function App() {
  return (
    <>
      <Header />
      <main className="no-scrollbar">
        <div className={styles.centerWrapper}>
          <div className={styles.gridContainer}>
            <Logo />
            <Content />
            <SocialIcons />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold m-10">My Projects</h2>
            <GithubRepos />
        </div>
      </main>
    </>
  );
}

export default App;
