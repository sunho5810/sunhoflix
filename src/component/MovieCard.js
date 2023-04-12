import React from 'react'
import { Badge } from 'react-bootstrap'
import { /* useDispatch, */ useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { movieDetailAction } from '../redux/actions/movieDetailAction';


const MovieCard = ({item}) => {
    // console.log("item??", item);
    const {genreList} = useSelector((state) => state.movie); // 변수명과 이름이 같으면 굳이 안해줘도됨
    // console.log("genreList?", genreList);

    const Navigate = useNavigate();

    // const dispatch = useDispatch();

    const gotoDetail = () => {
        console.log("gotoDetail!!", item.id);
        Navigate(`/movie/${item.id}`);
    }
  return (
    <div
        className='movie-card'
        style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/t/p/w355_and_h200_multi_faces${item.poster_path})`
        }}
        onClick={gotoDetail}
    >
        <div className='overLay'>
            <h3>{item.title}</h3>
            <div>
                {
                    item.genre_ids.map((id) => (
                        <Badge bg="danger" key={id}>
                            {genreList.find((item) => item.id == id).name}
                        </Badge>
                    ))
                }
            </div>
            <div>
                <span>{item.vote_average}</span>
                <span>{item.adult ? "청불" : "전체"}</span>
            </div>
        </div>
    </div>
  )
}

export default MovieCard