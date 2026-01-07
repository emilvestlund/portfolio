import logoImg from '../../assets/Logo.png';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <img className={styles.logo} src={logoImg} alt="Logo" />
    </div>
  );
}
