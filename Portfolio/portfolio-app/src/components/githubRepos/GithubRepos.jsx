import { useEffect, useState } from 'react';
import { Component } from '../Card/Card.jsx';

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

    return (
        repos.map(repo => (
            <Component 
                key={repo.id}
                name={repo.name}
                description={repo.description}
                url={repo.html_url}
            />
        ))
    );
}
