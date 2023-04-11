import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetail from './pages/MovieDetail';
import Movie from './pages/Movie';
import Navibar from './component/Navibar';
import Home from './pages/Home';

/************* todoList *************/
// 1. 홈페이지, movie페이지, movieDetail페이지 필요

// 2. 홈페이지
// 2-1. 배너를 볼 수 있다
// 2-2. 3가지 섹션의 영화를 볼 수 있다 (popular, top rated, upcoming)
// 2-3. 각 영화에 마우스를 올려두면, 제목, 장르, 점수, 인기도, 청불여부를 알 수 있음
// 2-4. 영화를 슬라이드로 넘기면서 리스트를 볼 수 있음

// 3. movieDetail 페이지
// 3-1. 영화에 대한 정보를 볼 수 있다 (포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임 등등)
// 3-2. trailer를 누르면 예고편을 볼 수 있다
// 3-3. 리뷰도 볼 수 있다.
// 3-4. 관련된 영화도 볼 수 있다

// 4. 영화 검색
// 4-1. 정렬 할 수 있다
// 4-2. 필터링 할 수 있다
/***********************************/

function App() {
  return (
    <div className='appWrapper'>
      <Navibar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/movie/:id' element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
