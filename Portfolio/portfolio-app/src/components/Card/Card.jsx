import { Button, Card } from "flowbite-react";
import styles from './Card.module.css';

export default function CardComponent(props) {

  const renderLanguages = (languages) => {
  if (!languages) {
    return (
      <p style={{ backgroundColor: 'red', color: 'azure' }}>
        No language data available
      </p>
    );
  }
      
    return (
      <div className={styles.languageBox}>
        {Object.keys(languages).map((language) => (
          <div key={language} className={styles.languageTag}>
            {language}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className={`max-w-sm rounded-t-4xl grow-0 ${styles.card}`}>
      <img
        className="object-fill rounded-t-4xl"
        src={props.image || "https://flowbite-react.com/images/blog/image-1.jpg"}
        alt={`${props.name} GitHub project`}
      />

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase pl-3">
        {props.name || "No Name"}
      </h5>

      <p className="font-normal text-gray-700 dark:text-gray-400 grow overflow-hidden mr-3 ml-3">
        {props.description || "No Description."}
      </p>

      <Button
        href={props.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} font-bold`}
      >
        Visit Project
      </Button>
        {props.tag ? renderLanguages(props.tag) : <p>No tags available</p>}
    </Card>
  );
}