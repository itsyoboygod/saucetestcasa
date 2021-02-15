import React, { useState, useEffect } from 'react'
import './style.css';

// const [repositories, setRepositories] = useState([
//     {id: 1, name: 'repo-1'},
//     {id: 2, name: 'repo-2'},
//     {id: 3, name: 'repo-3'}

// ]);

// function handleAddRepository(){
//     setRepositories([
//         ...repositories,
//         {id: Math.random(), name: "Novo repo"}
//     ])
// }

// return (
//     <>
//     <ul>
//         {repositories.map(repo => <li key={repo.id}>{repo.name}</li>)}
//     </ul>
//     <button onClick={handleAddRepository}>
//         <Address></Address>
//     </button>
//     </>
// )

export default function Hooks() {
    const [repositories, setRepositories] = useState([]);

    useEffect(async () => {
        const response = await fetch('https://api.github.com/users/itsyoboygod/repos')
        const data = await response.json();

        setRepositories(data);
    }, []);

    function handleFavorite(id) {
        const newRepositories = repositories.map(repo => {
            return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
        });

        setRepositories(newRepositories);
    }

    return (
        <div className="content-favorites">
            <ul>
                {repositories.map(repo => (
                    <li key={repo.id}>
                        {repo.name}
                        {repo.favorite && <span>(Favorito)</span>}
                        <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}