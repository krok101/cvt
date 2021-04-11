import React, { Component } from 'react'
import Item from './item'
import getData from '../../fakeData'

class ChannelsBox extends Component{
  constructor(){
    super()
    this.data = null
  }

  getItems(){
    let result = []
    let res = getData('/tv')
    res = JSON.parse(res)
    res.data.map( (item, index) => {
      let { imgUrl, channelName, tvProgramm } =  item
      result.push(
        <Item 
          key={index}
          imgUrl={imgUrl}
          channelName={channelName}
          tvProgramm={tvProgramm}
        />)
    })
    return result
  }

  render(){
    return(
      <div className="chanels-box">
        {this.getItems()}
      </div>
    )
  }
}

export default ChannelsBox