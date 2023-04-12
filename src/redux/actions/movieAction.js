import api from "../api";

function getMovies (){

    //env 설정 후 반드시 서버 재시작 해줘야됨
    const API_KEY = process.env.REACT_APP_API_KEY;

    return async(dispatch, getState) => {
        try{
            dispatch({type: "GET_MOVIES_REQUEST"});
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
            const genreApi = api.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);

            //await해야되는 작업들을 한번에 병렬로 처리해줌
            let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([popularMovieApi, topRatedApi, upComingApi, genreApi]); 
    
            // console.log("popularMovies?", popularMovies);
            // console.log("topRatedMovies?", topRatedMovies);
            // console.log("upcomingMovies?", upcomingMovies);
            // console.log("genreList?", genreList);
    
            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres
                }
            })
        } catch(error) {
            //에러 핸들링 하는 곳
            dispatch({type: "GET_MOVIES_FAILURE"});
        }
    }
}

export const movieAction = {
    getMovies,
};