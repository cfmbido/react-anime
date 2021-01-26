import '../App.css';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function FilmDetail() {
  const [film, setFilm] = useState()
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime/${params.id}`)
    .then(res => res.json())
    .then(({data}) => {
      setFilm(data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
  }, [params])

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
        <div className="container" style={{color: "black", backgroundColor: "#bedcfa", minHeight: "500px"}}>
        <div className="d-flex" style={{marginTop: "5rem"}}>
            <div>
                <img src={film.attributes.posterImage.small} alt="trending-anime" style={{paddingTop: "1.8rem", paddingLeft: "1rem"}}></img>
            </div>
            <div style={{fontSize: "medium", paddingLeft: "30px", paddingTop: "1.8rem"}}>
                <h3> {film.attributes.titles.en_jp}</h3>
                <p><b>Synopsis : </b> {film.attributes.synopsis}</p>
                <p><b>Rating : </b> {film.attributes.ageRatingGuide}</p>
                <p><b>Status : </b> {film.attributes.status}</p>
                <p><b>Score : </b> {film.attributes.averageRating}</p>
            </div>
        </div>
        </div>
    )
  }
  }
  
  export default FilmDetail;
  