import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import MoviesBox from '../components/movies-box'

class Movies extends Component{

  render(){
    return(
      <>
        <Header/>
          <div className="content">
            <MoviesBox/>
          </div>
        <Footer/>
      </>
    )
  }
}

export default Movies