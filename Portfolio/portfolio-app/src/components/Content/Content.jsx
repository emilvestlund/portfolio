import styles from './Content.module.css';

export default function Content() {
  return (
    <>
      <div className={styles.contentWrapper}>
        <h1 className={styles.name}>Emil Vestlund</h1>
        <h4 className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Perferendis, dolore velit. Aliquid repellat ducimus, maxime nemo dolor id nesciunt doloremque possimus, 
          delectus odio numquam obcaecati distinctio vero atque aspernatur voluptatum vel molestiae dicta? 
          Quam id porro dolorem earum obcaecati quae asperiores cumque quod ipsam? Possimus atque ipsum dicta nobis facilis?
        </h4>
      </div>
    </>
  );
}
