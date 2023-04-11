import api from "../api";

function getMovies (){

    const API_KEY = process.env.REACT_APP_API_KEY;

    return async(dispatch, getState) => {
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

        //await해야되는 작업들을 한번에 병렬로 처리해줌
        let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([popularMovieApi, topRatedApi, upComingApi]); 

        console.log("popularMovies?", popularMovies);
        console.log("topRatedMovies?", topRatedMovies);
        console.log("upcomingMovies?", upcomingMovies);

        dispatch({
            type: "GET_MOVIES_SUCCESS",
            payload: {
                popularMovies: popularMovies.data,
                topRatedMovies: topRatedMovies.data,
                upcomingMovies: upcomingMovies.data,
            }
        })
    }
}

export const movieAction = {
    getMovies,
};