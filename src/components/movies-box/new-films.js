import React, { Component } from 'react'
import getData from '../../fakeData'

export default class NewFilms extends Component{
  constructor(){
    super()
    this.data = []
  }



  getNewFilms(){
    let res = getData('/newfilms')
    res = JSON.parse(res)
    this.data = res.data
    let result = []
    this.data.map((item, index) => {
      result.push(
        <div className="new-film" key={index}>
          <div className="description new-film_description" style={{backgroundImage: `url(${item.imgUrl})`}}>
            <div className="description__text">{item.discription}</div>
          </div>
          <div className="new-film__name">{item.name}</div>
        </div>
      )
    })
    return result
  }

  render(){
    return(
      <div className="new-films-box">
        <img className="new-films-box__label" src="/img/smiles/fire.svg"/> 
        <div className="new-films-container">
          {this.getNewFilms()}
        </div>
      </div>
    )
  }
}