import './App.css';
import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const FEARURED_API = 'https://api.themoviedb.org/3/trending/tv/day?api_key=3c2c0eac95fd821b262a551e574ffe6d'


const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3c2c0eac95fd821b262a551e574ffe6d&query='


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    
    getMovies(FEARURED_API)

  }, [])


  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setMovies(data.results)
    })
  }


  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm)
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setMovies(data.results)
        });

      setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <header>
        <h1>TOP 20 SÉRIES DO MOMENTO</h1>
        <form onSubmit={handleOnSubmit}>
          <input className='search' type="search" placeholder='Procurar...' value={searchTerm} onChange={handleOnChange} />
        </form>
      </header>
      <div className='movie-container'>
        {movies.length > 0 && movies.map((movie) =>
          <Movie key={movie.id} {...movie} />
        )}
      </div>
    </>
  );
}

export default App;