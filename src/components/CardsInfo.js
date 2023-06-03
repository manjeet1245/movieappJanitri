import React, { useState, useEffect} from 'react'
import Axios from "axios";
import '../styles/CardsInfo.css'

const CardsInfo = (props) => {
  const [movieInfo,setMovieInfo] = useState([]);
 


  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${props.selectedMovie}&apikey=2a863df6`,
    ).then((response) => setMovieInfo(response.data));
   
  }, [props.selectedMovie]);

  console.log(movieInfo);




  return (
    <div className='infoContainer'>
      {
        movieInfo ? (
          <>
          <img className='infocover' src={movieInfo?.Poster} alt="Title" />
          <div className="infocolumn">

            <div className="movieName">
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </div>

            <div className="movieinfo">
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </div>

            <div className="movieinfo">
            Language: <span>{movieInfo?.Language}</span>
            </div>

            <div className="movieinfo">
            Rated: <span>{movieInfo?.Rated}</span>
            </div>

            <div className="movieinfo">
             Released: <span>{movieInfo?.Released}</span>
            </div>

            <div className="movieinfo">
            Runtime: <span>{movieInfo?.Runtime}</span>
            </div>

            <div className="movieinfo">
            Genre: <span>{movieInfo?.Genre}</span>
            </div>

            <div className="movieinfo">
            Director: <span>{movieInfo?.Director}</span>
            </div>

            <div className="movieinfo">
            Actors: <span>{movieInfo?.Actors}</span>
            </div>

            <div className="movieinfo">
            Plot: <span>{movieInfo?.Plot}</span>
            </div>

          </div>
          <div>
            <button onClick={() => props.setSelectedMovie() } className='closebtn'>X</button>
          </div>
        
          </>
        ) : (
          "Loading...."
        )
      }
    </div>
  )
}

export default CardsInfo