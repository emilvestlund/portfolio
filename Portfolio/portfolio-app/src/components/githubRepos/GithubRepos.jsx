import { useEffect, useState } from 'react';
import CardComponent from '../Card/Card.jsx';
import styles from './GithubRepos.module.css';

export default function GithubRepos() {
    const [repos, setRepos] = useState([]);
    const [langs, setLangs] = useState({}); 

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_GITHUB_API_KEY}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                setRepos(data);

                data.forEach((repo) => {
                    fetchLanguages(repo); 
                });

                console.log('Repos were fetched successfully');
            } catch (error) {
                console.error('Error fetching repos from GitHub', error);
            }
        };

        const fetchLanguages = async (repo) => {
            try {
                const response = await fetch(repo.languages_url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch languages for ${repo.name}`);
                }
                const languageData = await response.json();
                setLangs((prevState) => ({
                    ...prevState,
                    [repo.id]: languageData,
                }));
            } catch (error) {
                console.error(`Error fetching languages for ${repo.name}`, error);
            }
        };

        fetchRepos();
    }, []);

    const filterRepos = repos.filter((repo) => repo.name !== 'emilvestlund' && repo.name !== 'portfolio');

    return (
        <div className={styles.cardGrid}>
            {filterRepos.map((card) => (
                <CardComponent
                    key={card.id}
                    name={card.name}
                    description={card.description}
                    url={card.html_url}
                    tag={langs[card.id]}
                />
            ))}
        </div>
    );
}