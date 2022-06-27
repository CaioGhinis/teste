import React from 'react'
import { FaPlay,  FaPlus} from "react-icons/fa";

/*API Imagens*/
const IMG_API = 'https://image.tmdb.org/t/p/w1280/'

/* Cor das notas*/
const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    } else {
        return 'red'
    }
}

/*Arredondar número das notas*/
const round = vote_average => {
    return(vote_average.toFixed(1))
}

/*Deixar a primeira letra maiúscula*/
const capitalizeFirst = media_type => {
    if(media_type){
    return media_type.toUpperCase(0) 
} else{
    return ''
}
};

const Movie = ({poster_path, overview, media_type, vote_average, title}) => {
    return (
        <div className='movie'>
            <div className='movie-header'>
                <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80'} alt={title} />
                <div className='movie-info'>
                    <h3>{title}</h3>
                    <span className={`tag ${setVoteClass(vote_average)}`}>{round(vote_average)}</span>
                </div>
            </div>

            <div className='movie-overview'>
                <p className='media-type'>{capitalizeFirst(media_type)}</p>
                <div className='overview'>
                    <h2 >Overview:</h2>
                    <p>{overview}</p>
                </div>
                <div className='icons'>
                    <div className='button-icon'><FaPlay/></div>
                    <div className='button-icon'><FaPlus/></div>
                </div>
            </div>

        </div>
    )
}

export default Movie