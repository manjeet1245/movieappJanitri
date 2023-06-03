import { useState } from 'react';
import '../styles/Header.css'
import { BiSearch } from 'react-icons/bi'
import Cards from './Cards';
import Axios from "axios";
import Movies from './Movies'
import CardsInfo from './CardsInfo';


function Header() {
    const [search,setSearch] =  useState("");
    const [movieList,setMovieList] = useState([]);
    const [selectedMovie,setSelectedMovie] =  useState('');
    const [home,setHome] = useState(true);
   

    const fetchData = async (searchString) => {
        const response = await Axios.get(
          `https://www.omdbapi.com/?s=${searchString}&apikey=2a863df6`,
        );
        setMovieList(response.data.Search);
      };

  
        
    const handleMovie = (e) => {
       
        setSearch(e.target.value);
        fetchData(e.target.value)
        setHome(false);
        if(e.target.value==='')
        {
            setHome(true);
        }
       
        

    };

    return (
        <>
        <div className="main">
            <div className='title'>
                <h3>Movie App</h3>
            </div>

            <div className='srch'>
                <BiSearch className='srch-icon' />
                <input className='srch-inpt' type='search'
                    placeholder='Search Movie' value={search}
                    onChange={handleMovie}
                />

            </div>
        </div>
        
        <div>
        
        { selectedMovie && <CardsInfo selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>} 

        </div>

        <div className='tempcont'>
            {
               
                    movieList?.map((movie,index) => (
                        <Cards 
                        key={index}
                        movie={movie}
                        setSelectedMovie={setSelectedMovie}
                        />
                    ))
                 
            }

        </div>

        {home && <Movies setSelectedMovie={setSelectedMovie} />}
        </>
    )
}

export default Header; 