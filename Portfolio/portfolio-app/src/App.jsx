import styles from './App.module.css';
import CarouselComponent from './components/Carousel/Carousel.jsx';
import Content from './components/Content/Content.jsx';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import SocialIcons from './components/SocialIcons/SocialIcons.jsx';
import GithubRepos from './components/githubRepos/GithubRepos.jsx';


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
      <div className="flex flex-col items-center justify-center gap-1 p-1 m-0">
        <h2 className="text-7xl font-bold">My Projects</h2>
          <GithubRepos>
            <CarouselComponent/>
          </GithubRepos>
      </div>
    </>
  );
}

export default App;
