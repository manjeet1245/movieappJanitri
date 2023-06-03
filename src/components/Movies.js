import { useState, useEffect } from 'react'
import Cards from './Cards';
function Movies(props){
   const [data, setData] = useState([]);
   const {setSelectedMovie}= props

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s={fast}&apikey=2a863df6`);
      const jsonData = await response.json();
      setData(jsonData.Search);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    }
    return(
        <div className='tempcont' onClick={() =>{

          window.scrollTo({ top: 0, behavior: "smooth" });
  
      }}>
            {
               data?.map((movie, index) =>(
                <Cards 
                key={index}
                movie={movie}
                setSelectedMovie={setSelectedMovie}
                />
               ))
            }
          
            
        </div>
    )
}

export default Movies