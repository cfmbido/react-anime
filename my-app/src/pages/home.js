import '../App.css';
import React from 'react'
import FilmCard from '../components/FilmCard'
import useFetch from '../hooks/useFetch'

function Home() {

  const { data: films, loading } = useFetch()

  if(loading){
    return (
      <div className="App">
      <header className="App-header">
        <p style={{color: "black", fontWeight: "bold"}}>
          Loading...
        </p>
      </header>
      </div>
    )
  }else{
    return (
    <div className="App" style={{marginTop: "2rem"}}>
        <div className="App-header">
        <h1 style={{textAlign: "center", color: "black", margin: "50px 0px", fontFamily: "fantasy"}}>TRENDING ANIME</h1>
        <div className="container">
          <div className="row" style={{paddingLeft: "90px", paddingBottom: "30px"}}>
          {
            films.map(dataFilm => {
              return <FilmCard key={dataFilm.id} dataFilm={dataFilm}/>
            })
          }
          </div>
        </div>
        </div>
    </div>
    )
  }
}

export default Home;
