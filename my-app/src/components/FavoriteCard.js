import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFavorites } from '../store/actions/favActions'

function FavoriteCard(props) {
    const dispatch = useDispatch()

    function removeFromFav (id) {
        dispatch(removeFavorites(id))
    }

    return (
    <div className="card" style={{width: "18rem", color: "black", margin: "15px", backgroundColor: "#bedcfa"}}>
        <img className="card-img-top" src={props.favfilm.img} alt="error" style={{maxWidth: "286px", maxHeight: "286px"}}></img>
        <div className="card-body">
        <h5 className="card-title">{props.favfilm.title}</h5>
        <button className="btn" onClick={() => removeFromFav(props.favfilm.id)} style={{backgroundColor: "#98acf8"}}>Remove</button>
        </div>
    </div>
    )
}

export default FavoriteCard