import React from 'react'
import "./searchpage.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Searchpage(props) {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index)=> (
                <div className='image-container justify-content-start m-2 search'>
                    <img src={movie.Poster} alt='movie'></img>
                    <div 
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay'>
                        <FavouriteComponent />
                    </div>
                </div>))}
        </>
    )
}

