import styles from './Header.module.css';

export default function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.titleBlock}>
          <h1 className="tracking-normal text-5xl gap-0.5">Emil</h1>
          <h4 className="tracking-widest italic">Web Developer & Network Engineer</h4>
        </div>

        <nav>
          <ul className={styles.navLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Education">Education</a></li>
            <li><a href="Experience">Experience</a></li>
            <li><a href="Contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      );
}