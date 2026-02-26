import { useEffect, useState } from 'react';
import CardComponent from '../Card/Card.jsx';
import styles from './GithubRepos.module.css';

export default function GithubRepos() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {

        const fetchRepos = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_GITHUB_API_KEY}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                setRepos(data);

                console.log('Data fetched successfully');
            } catch (error) {
                console.error('Error fetching repos from GitHub', error);
            }
        };
        fetchRepos();
    }, []);

    const filterRepos = repos.filter((repo) => repo.name !== "emilvestlund" && repo.name !== "portfolio");

    return (
        <div className={styles.cardGrid} >
            {filterRepos.map((card) => (
                <CardComponent
                    key={card.id}
                    name={card.name}
                    description={card.description}
                    url={card.html_url}
                />
            ))}
        </div>
    );
}
