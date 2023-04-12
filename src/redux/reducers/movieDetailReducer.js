let initState = {
    detail: {},
    review: {},
    related: {},
    loading: true
}

function movieDetailReducer(state = initState, action){
    let {type, payload} = action;

    switch (type) {
        case "GET_MOVIE_DETAIL_REQUEST":
            console.log("GET_MOVIE_DETAIL_REQUEST");
            return {
                ...state,
                loading: true
            }
        case "GET_MOVIE_DETAIL_SUCCESS":
            return {
                ...state,
                detail: payload.detail,
                review: payload.review,
                related: payload.related,
                loading: false
            }
        case "GET_MOVIE_DETAIL_FAILURE":
            console.log("GET_MOVIE_DETAIL_FAILURE");
            return {
                ...state,
                loading: false
            }
        default:
            return {...state}
    }

}

export default movieDetailReducer;