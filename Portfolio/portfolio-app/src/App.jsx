import styles from './App.module.css';
import CarouselComponent from './components/Carousel/Carousel.jsx';
import Content from './components/Content/Content.jsx';
import GithubRepos from './components/githubRepos/GithubRepos.jsx';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import SocialIcons from './components/SocialIcons/SocialIcons.jsx';


function App() {
  return (
    <>
      <Header />
      <main>
      <div className={styles.centerWrapper}>
        <div className={styles.gridContainer}>
          <Logo />
          <Content />
          <SocialIcons />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold">My Projects</h2>
          <GithubRepos>
            <CarouselComponent/>
          </GithubRepos>
      </div>
      </main>
    </>
  );
}

export default App;
