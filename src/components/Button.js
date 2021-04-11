import React from 'react'

const Button = (props) => {
  return(
    <div className="button button_red" onClick={props.onClick}>
      <div className="button__title">{props.title}</div>
    </div>
  )
}

export default Button