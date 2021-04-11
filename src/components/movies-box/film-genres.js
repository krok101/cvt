import React from 'react'

const FilmsGenres = () => {
  return(
    <div className="genres-box">
      <div className="genres-box__label">Жанры</div>
      <div className="ganres-container">
        <div className="ganre ganre_orange">
          <img src="/img/smiles/comedy.svg" className="ganre__smile"/>
          <div className="ganre__title">Комедии</div>
        </div>
        <div className="ganre ganre_pink">
          <img src="/img/smiles/drama.svg" className="ganre__smile"/>
          <div className="ganre__title">Драмы</div>
        </div>
        <div className="ganre ganre_blue">
          <img src="/img/smiles/fiction.svg" className="ganre__smile"/>
          <div className="ganre__title">Фантастика</div>
        </div>
        <div className="ganre ganre_grey">
          <img src="/img/smiles/horrors.svg" className="ganre__smile"/>
          <div className="ganre__title">Ужасы</div>
        </div>
      </div>
    </div>
  )
}

export default FilmsGenres