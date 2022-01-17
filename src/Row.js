import React,{ useEffect, useState } from 'react';
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
//instance from axios file is renamed to axios
import axios from './axios';

const baseurl="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {

    const[movies,setMovies]=useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");
    const opts={
        height:"390",
        width: "100%",
        playerVars: {
            autoplay:1,
        }
    }
    const handleClick=(movie)=>{

        if(trailerUrl)
        {
            setTrailerUrl('');
        }
        else
        {
            movieTrailer(movie?.name||"").then(url=>{
                const urlParams= new URLSearchParams(new URL(url).search);
                // console.log(urlParams);
                setTrailerUrl(urlParams.get('v'));
                console.log(urlParams);
            }).catch((error)=> console.log(error));
        }
    }

    useEffect(()=>{
        async function fetchData() {
            //axios.get(fetchUrl) will append the fetchUrl to the baseURL of axios file.
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            // console.log(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
    console.log(movies);
    return (
        <div className="row">
            {/* Title */}
            <h2>{title}</h2>

            {/* Container->Posters */}
            <div className="row__posters">
                    {movies.map(movie =>{
                        return(
                            <img
                            key={movie.id}
                            onClick={()=> handleClick(movie)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}src={`${baseurl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                        )
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            {/* {"oqxAJKy0ii4" && <YouTube videoId="oqxAJKy0ii4" opts={opts}/>} */}
        </div>
    )
}

export default Row
