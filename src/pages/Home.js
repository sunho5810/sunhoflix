import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction';
import Banner from '../component/Banner';

const Home = () => {

    const {popularMovies, topRatedMovies, upcomingMovies} = useSelector((state) => state.movie);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);
    
  return (
    <div>
        {/* 조건부 랜더링 하는 법 */}
        {popularMovies.results && <Banner movie={popularMovies.results[0]}/>}        
    </div>
  )
}

export default Home