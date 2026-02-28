import { Button, Card } from "flowbite-react";
import styles from './Card.module.css';

export default function CardComponent(props) {

  const renderLanguages = (languages) => {
    if (!languages) {
      return <p className={styles.noTags}>No language data available</p>;
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
    <Card className={`max-w-md rounded-lg shadow-lg ${styles.card}`}>
      <img
        className="object-cover rounded-t-lg"
        src={props.image || "https://flowbite-react.com/images/blog/image-1.jpg"}
        alt={`${props.name} GitHub project`}
      />

      <div className="p-4">
        <h5 className="font-semibold text-white mb-2">
          {props.name || "No Name"}
        </h5>

        <p className={`desc text-gray-400 mb-3 ${styles.desc}`}>
          {props.description || "No Description."}
        </p>

        <div className={styles.buttonTagsContainer}>
          <Button
            href={props.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} font-semibold w-full`}
            >
            Visit Project
          </Button>

          {props.tag ? renderLanguages(props.tag) : <p className="text-gray-400">No tags available</p>}
        </div>
      </div>
    </Card>
  );
}