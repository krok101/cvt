import React from 'react'

const getTvPrograms = (data) => {
  let result = []
  data.map( (item, index) => {
    let className = index === 0 ? "tv-programm active" : "tv-programm"
    result.push(
    <div key={index} className={className}>
      <div className="tv-programm__time">{item.time}</div>
      <div className="tv-programm__title">{item.title}</div>
    </div>
    )
  })
  return result
}

const Item = (props) =>{
  return(
    <div className="item-container">
      <div className="item-container__img channel-logo">
        <img className="channel-logo_img" src={props.imgUrl}/>
      </div>
      <div className="info-box item-container__info-box">
        <div className="info-box__channel-name">{props.channelName}</div>
        <div className="info-box__tv-programms">
          {getTvPrograms(props.tvProgramm)}
        </div>
      </div>
    </div>
  )
}

export default Item