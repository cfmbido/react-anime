import './App.css';
import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { Home, FilmDetail, Favorites } from './pages/index'
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  
  return (
    <>
    <Provider store={store}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor: "#bedcfa"}}>
        <span className="navbar-brand mb-0 h1">ReactAnime</span>
        <NavLink className="navbarlink" exact to="/">Home</NavLink>
        <NavLink  className="navbarlink" to="/favorites">Favorites</NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/detail/:id">
          <FilmDetail></FilmDetail>
        </Route>
        <Route path="/favorites">
          <Favorites></Favorites>
        </Route>
      </Switch>
    </Provider> 
    </>
  )
}

export default App;
