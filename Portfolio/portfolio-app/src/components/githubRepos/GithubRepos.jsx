import { createContext, useEffect, useState } from 'react';
export const ReposContext = createContext();


export default function GithubRepos({ children }) {
    
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

    const filterRepos = repos.filter((repo) => repo.name !== "emilvestlund");

    return (
        <ReposContext.Provider value={filterRepos}>
            {children}
        </ReposContext.Provider>
    );
}
