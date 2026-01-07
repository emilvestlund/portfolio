import styles from './Content.module.css';

export default function Content() {
  return (
     <>
      <h1 className={styles.name}>Emil Vestlund</h1>
      <h4 className={styles.description}>
         Welcome to my portfolio website! I am a passionate Web Developer and Network Engineer with a
        knack for creating efficient and user-friendly digital solutions. Explore my projects and
        skills to see how I can contribute to your next venture.
      </h4>
    </>
  );
}
