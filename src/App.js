import './App.css';
import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Footer from './components/Footer';

const FEATURED_API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=3c2c0eac95fd821b262a551e574ffe6d'


const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3c2c0eac95fd821b262a551e574ffe6d&query='


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    
    getMovies(FEATURED_API)

  }, [])


  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setMovies(data.results)
    })
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm)
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setMovies(data.results)
        });
    }
  }

  return (
    <>
      <header>
        <h1>TOP 20 FILMES DO MOMENTO</h1>
        <form>
          <input className='search' type="search" placeholder='Procurar...' value={searchTerm} onChange={handleOnChange} />
        </form>
      </header>
      <div className='movie-container'>
        {movies.length > 0 && movies.map((movie) =>
          <Movie key={movie.id} {...movie} />
        )}
      </div>
      <Footer/>
    </>
  );
}

export default App;