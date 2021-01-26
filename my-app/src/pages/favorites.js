import '../App.css';
import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteCard from '../components/FavoriteCard'

function Favorites() {
    const favfilms = useSelector(state => state.favfilms)

    return (
    <>
    <div className="App" style={{marginTop: "5rem"}}>
        <h1 style={{textAlign: "center", color: "black", margin: "50px 0px", fontFamily: "fantasy"}}>YOUR FAVORITES</h1>
        <div className="container">
          <div className="row" style={{paddingLeft: "90px", paddingBottom: "30px"}}>
            {
                favfilms.map(favfilm => {
                    return <FavoriteCard  key={favfilm.id} favfilm={favfilm}></FavoriteCard>
                })
            }
          </div>
        </div>
    </div>
    </>
    )
  }
  
  export default Favorites;