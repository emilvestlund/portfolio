import styles from './Card.module.css';

export default function CardComponent(props) {

  const languageColors = {
    'JavaScript': '#FFD700',
    'TypeScript': '#3178C6',
    'Java': '#ED8B00',
    'HTML': '#E34C26',
    'CSS': '#563D7C',
    'React': '#61DAFB',
    'Vue': '#42B983',
    'Node.js': '#339933',
    'Express': '#000000',
    'C#': '#239120',
  };

  const getLanguageHoverColor = (language) => {
    return languageColors[language] || '#6B7280';
  };

  const renderLanguages = (languages) => {
    if (!languages) {
      return <p className={styles.noTags}>No language data available</p>;
    }
    return (
      <div className={styles.languageBox}>
        {Object.keys(languages).map((language) => (
          <div
            key={language}
            className={styles.languageTag}
            style={{
              '--hover-color': getLanguageHoverColor(language),
            }}
          >
            {language}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`max-w-md rounded-lg shadow-lg ${styles.card}`}>
        <h5 className="font-semibold text-white">
          {props.name || "No Name"}
        </h5>
        <p className={`text-gray-300 ${styles.desc}`}>
          {props.description || "No Description."}
        </p>
        <div className={styles.buttonTagsContainer}>
          <button
            href={props.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} font-semibold`}
            >
            Visit Project
          </button>
          {props.tag ? renderLanguages(props.tag) : <p className="text-gray-400">No tags available</p>}
      </div>
    </div>
  );
}