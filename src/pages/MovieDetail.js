import React, { useEffect, useState } from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { movieDetailAction } from '../redux/actions/movieDetailAction';
import { ClipLoader } from 'react-spinners';
import MovieCard from '../component/MovieCard';


/* todoList */
// 1. url에서 id값 받아오기
// 2. id 받아와서 그 id에 맞는 movie데이터 받아오기
// 3. 데이터에 맞게 뿌려주기

const MovieDetail = () => {

  const [tabName, setTabName] = useState("review");

  const {detail, review, related, loading} = useSelector((state) => state.detail);

  // console.log("detail.genres??", detail.genres);
  // console.log("review.results??", review.results);
  console.log("related??", related);

  const {id} = useParams();

  const dispatch = useDispatch();

  const detailTab = (btnName) => {
    setTabName(btnName);
  }

  useEffect(() => {
      dispatch(movieDetailAction.getMovieDetail(id));
  }, [id])

  if(loading){
    console.log("loading 1111111", loading);
    return <ClipLoader color="#E50914" loading={loading} size={150}/>
  } else {
    console.log("loading 2222222", loading);
    return (
      <Container>
        <Row>
          <Col>
            <img 
              className='poster-img'
              src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/t/p/w355_and_h200_multi_faces${detail.poster_path}`}/>
          </Col>
          <Col>
            <div>
              {
                detail.genres.map((item) => (
                  <Badge bg="danger" key={item.id}>{item.name}</Badge>
                ))
              }
            </div>
  
            <h2>{detail.title}</h2>
            <div>
              <span>vote_avg : {detail.vote_average}</span>
              <span>popular : {detail.popularity}</span>
              <span>age : {detail.adult == true ? "adult" : "all"}</span>
            </div>
            
            <div>{detail.overview}</div>
  
            <div>
              <div><Badge bg="danger">Budget</Badge><span>{detail.budget}</span></div>
              <div><Badge bg="danger">Revenue</Badge><span>{detail.revenue}</span></div>
              <div><Badge bg="danger">Release Day</Badge><span>{detail.release_date}</span></div>
              <div><Badge bg="danger">Time</Badge><span>{detail.runtime}</span></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
              <div>
                <div>
                  <Button variant='light' onClick={() => detailTab("review")}>REVIEWS ({review.results.length})</Button>
                  <Button variant='light' onClick={() => detailTab("related")}>RELATED MOVIES ({related.results.length})</Button>
                </div>

                {
                  tabName === "review" ? (
                    <div>
                      {
                        review.results.map((item) => (
                          <div key={item.id}>
                            <h4>{item.author}</h4>
                            <p>{item.content}</p>
                          </div>
                        ))
                      }
                    </div>
                  ) : (
                    <div className='relatedList'>
                      {
                        related.results.map((item) => (
                          <MovieCard className='relatedList-item' key={item.id} item={item}/>
                        ))
                      }
                    </div>
                  )
                }

                
                
              </div>        
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MovieDetail