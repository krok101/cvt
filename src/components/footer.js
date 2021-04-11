import React, { Component } from 'react'

class Footer extends Component{

  render(){
    return(
      <footer className="footer">
        <div className="content footer-content">
          <img src="/img/footerImg.svg" className="footer-content__img"/>
          <div className="footer-content__information footer-information">
            <div className="footer-information__text">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</div>
            <div className="footer-information__text">+7 (3412) 93-88-61, 43-29-29</div>
            <a className="footer-information__link">htc-cs.ru  </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer