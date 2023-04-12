import api from "../api";


function getMovieDetail(id){
    const API_KEY = process.env.REACT_APP_API_KEY;

    return async(dispatch, getState) => {
        try {
            dispatch({type: "GET_MOVIE_DETAIL_REQUEST"});
            const movieDetailApi = /* await */ api.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const movieReviewApi = /* await */ api.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
            const relatedMoviesApi = /* await */ api.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)

            let [detail, review, related] = await Promise.all([movieDetailApi, movieReviewApi, relatedMoviesApi]); 

            dispatch({type: "GET_MOVIE_DETAIL_SUCCESS", payload: {detail: detail.data, review: review.data, related: related.data}});
        } catch (error) {
            dispatch({type: "GET_MOVIE_DETAIL_FAILURE"});
        }
        
    }
}

export const movieDetailAction = {getMovieDetail};