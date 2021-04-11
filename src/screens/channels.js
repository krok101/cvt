import React, { Component } from 'react'
import ChannelsBox from '../components/channels-box'
import Footer from '../components/footer'
import Header from '../components/header'

class Channels extends Component{

  render(){
    return(
      <>
        <Header/>
        <div className="content">
          <ChannelsBox/>
        </div>
        <Footer/>
      </>
    )
  }
}

export default Channels