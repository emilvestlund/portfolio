import styles from './SocialIcons.module.css';

export default function SocialIcons() {
  return (
    <div className={styles.icons}>

      <a href="https://github.com/emilvestlund"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="GitHub Profile">
        <i className={`${styles.icon} fab fa-github`}></i>
      </a>

      <a href="https://www.linkedin.com/in/emil-vestlund-634b51209/"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="LinkedIn Profile">
        <i className={`${styles.icon} fab fa-linkedin`}></i>
      </a>

      <a href="https://www.behance.net/creationdzns"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Behance Profile">
        <i className={`${styles.icon} fab fa-square-behance`}></i>
      </a>

      <a href="mailto:emilvestlund@hotmail.com"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Email Profile">
        <i className={`${styles.icon} fas fa-envelope`}></i>
      </a>

    </div>
  );
}
