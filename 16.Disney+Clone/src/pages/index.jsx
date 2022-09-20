import { useState,useEffect } from 'react';
import Banner from '../components/Banner';
import Brands from '../components/Brands';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import MovieCollection from '../components/MovieCollection';

function Home({ login, setLogin }) {
    const[movieList,setMovieList] = useState([]);
    const url = 'http://localhost:3000/datMovielist.json';
    useEffect(() => {
        async function getMovieList() {
            const resp = await fetch(url);
            setMovieList(await(resp.json()));
        }
        getMovieList();
    },[])
    
  return (
    <>
        <Header login={login} setLogin={setLogin}/>
        {
        !login ? (<LandingPage/>) :
        (
          <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
            <Banner className="" />
            <Brands />
            <MovieCollection category="recommend" movlist={movieList} />
            <MovieCollection category="new" movlist={movieList} />
            <MovieCollection category="original" movlist={movieList} />
            <MovieCollection category="trending" movlist={movieList} />
          </main>
        )

        
      }
    </>
  )
}

export default Home;