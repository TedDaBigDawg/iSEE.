import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./discoverpage.css"
import Searchpage from '../Component/Searchpage/Searchpage'
import MovieListHeading from '../Component/MovieListHeading';
import SearchBox from '../Component/SearchBox';
import AddFav from '../Component/AddFav';
import RemoveFav from '../Component/RemoveFav';

export default function Discoverpage() {

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fb571613`

  const response = await fetch(url);
  const responseJson = await response.json();

  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
}

useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue]);

useEffect(()=> {
  const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));

  setFavourites(movieFavourites);
}, []);

const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
}

const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
}

const removeFavouriteMovie = (movie) => {
  const newFavouriteList = favourites.filter(
    (favourite) => favourite.imdbID !== movie.imdbID
  );

  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
}

  return (
    <div className='mainContainerDiscover movie-app'>
      <div className='rowheader'>
        <MovieListHeading heading='Discover' />
      </div>
      <div className='searchbox'>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div style={{ display: 'flex' , marginLeft:"5px" , flexWrap:"wrap" }}>
          <Searchpage 
                  movies={movies}
                  handleFavouritesClick={addFavouriteMovie}
                  favouriteComponent={AddFav}
          />
      </div>
      <div className='rowheader2'>
        <MovieListHeading heading='Your Watchlist' />
      </div>
      <div style={{ display: 'flex' , marginLeft:"5px" , flexWrap:"wrap" }}>
          <Searchpage 
                  movies={favourites}
                  handleFavouritesClick={removeFavouriteMovie}
                  favouriteComponent={RemoveFav}
          />
      </div>
    </div>
  )
}
