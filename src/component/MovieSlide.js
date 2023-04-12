import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 20
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 20
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20
    }
  };

const MovieSlide = ({movies}) => {
    // console.log("movies?", movies);

  return (
    <div>
        <Carousel
            responsive={responsive}
            infinite={true}
            showDots={true}
            draggable={true}
        >
            {
                movies.results.map((item) => (
                    <MovieCard key={item.title} item={item}/>
                ))
            }
        </Carousel>
    </div>
  )
}

export default MovieSlide