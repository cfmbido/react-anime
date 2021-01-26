import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavorites } from '../store/actions/favActions'

function FilmCard(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    function goDetail (id) {
        history.push(`/detail/${id}`)
    }

    function addFav (payload) {
        dispatch(addFavorites(payload))
    }

    return (
    <div className="card" style={{width: "18rem", color: "black", margin: "15px", backgroundColor: "#bedcfa"}}>
        <img className="card-img-top" src={props.dataFilm.attributes.posterImage.small} alt="error" style={{maxWidth: "286px", maxHeight: "286px"}}></img>
        <div className="card-body">
        <h5 className="card-title">{props.dataFilm.attributes.titles.en_jp}</h5>
        <button  onClick={() => goDetail(props.dataFilm.id)} className="btn" style={{backgroundColor: "#98acf8"}}>Details</button>
        <button  onClick={() => addFav({id: props.dataFilm.id, title: props.dataFilm.attributes.titles.en_jp, img: props.dataFilm.attributes.posterImage.small})} className="btn ml-2" style={{backgroundColor: "#98acf8"}}>Add to Favorites</button>
        </div>
    </div>
    )
}

export default FilmCard