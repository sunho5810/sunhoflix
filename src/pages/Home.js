import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction';
import Banner from '../component/Banner';
import MovieSlide from '../component/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

    const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector((state) => state.movie);
    console.log("popularMovies??", popularMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);
    
    //  조건부 랜더링 하는 법 
    //  popularMovies.results && <Banner movie={popularMovies.results[0]}/>
    // 원래는 이렇게 조건부 랜더링을 해야하지만
    // loading 값에 의해 return을 다르게 하고 있으므로 해줄 필요 없음

    // loading 이 ture면 loading-spinner를 보여주고
    // loading 이 false면 데이터를 보여주고
    // true: 데이터 도착 전
    // false: 데이터 도착 후, 에러가 났을때
    if(loading){
      return <ClipLoader color="#E50914" loading={loading} size={150}/>
    } else {
      return (
        <div>
          <Banner movie={popularMovies.results[0]}/> 
    
          <h2>Popular Movie</h2>
          <MovieSlide movies={popularMovies}/>
          <h2>Top rated Movie</h2>
          <MovieSlide movies={topRatedMovies}/>
          <h2>Upcoming Movie</h2>
          <MovieSlide movies={upcomingMovies}/>
        </div>
      )
    }

}

export default Home