import React from 'react'

const Search = (props) => {
  return(
    <div className="b-search">
      <input className="b-search__input" placeholder="Поиск..."/>
      <div className="b-search__button">Найти</div>
    </div>
  )
}

export default Search