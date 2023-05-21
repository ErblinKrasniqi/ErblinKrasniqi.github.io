import React, { useState, useEffect } from 'react'
import Search from './search.svg'
import './App.css'


import MovieCard from './MovieCard';


//e4c04b78

const API_URL = 'http://omdbapi.com?apikey=e4c04b78'



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() =>{
        searchMovies('Batman')
    }, [])

    return (
        <div className='app'>
            <h1>MovieSearch</h1>

            <div className='search'>
                <input 
                placholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      searchMovies(searchTerm);
                      return;
                    }
                    return null;
                  }}
                  
                  
                />
                <img 
                src={Search}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies.length > 0 ? (
                    <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard key={Math.random()} movie={movie}/>
                    ))}
                </div>
                ) :
                (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }


   
        </div>
    );
}

export default App;