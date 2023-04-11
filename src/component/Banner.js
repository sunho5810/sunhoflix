import React from 'react'

const Banner = ({movie}) => {
    console.log("movie?", movie);
  return (
    <div 
        className='banner'
        style={{
            background: "url(" +
                `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
                ")" +
                "center/cover no-repeat"
        }}
    >
    <div className='banner-info'>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
    </div>
    </div>
  )
}

export default Banner