import './App.css';
import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Footer from './components/Footer';

/*API dos filmes*/
const FEATURED_API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=3c2c0eac95fd821b262a551e574ffe6d'

/*API para busca*/
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3c2c0eac95fd821b262a551e574ffe6d&query='


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    } else{
      getMovies(FEATURED_API)
    }

  }, [searchTerm])


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
  }

  return (
    <>
      <header>
        <h1>TOP 20 FILMES EM ALTA</h1>
        <form>
          <input className='search' type="search" placeholder='&#61442; Procurar...' value={searchTerm} onChange={handleOnChange}/>
        </form>
      </header>
      <div className='movie-container'>
        {movies.length > 0 && movies.map((movie) =>
          <Movie key={movie.id} {...movie}/>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default App;