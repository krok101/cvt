import React, { Component } from 'react'
import FilmsGenres from './film-genres'
import NewFilms from './new-films'

class MoviesBox extends Component{
  render(){
    return(
      <div className="movies-box">
        <NewFilms/>
        <FilmsGenres/>
      </div>
    )
  }
}

export default MoviesBox