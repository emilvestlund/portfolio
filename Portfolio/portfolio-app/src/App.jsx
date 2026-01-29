import styles from './App.module.css';
import Content from './components/Content/Content.jsx';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import SocialIcons from './components/SocialIcons/SocialIcons.jsx';
import GithubRepos from './components/githubRepos/githubRepos.jsx';

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

    
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-7xl font-bold">My Projects</h2>
        <div className="flex flex-row gap-10 m-96">
          <GithubRepos />
        </div>
      </div>
    </>
  );
}

export default App;
