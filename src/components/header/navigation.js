import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Nav = (props) => {
  const location = useLocation();

  const tabIsActive = (link) => {
    return link === location.pathname ? 'navigation__button-tab active' : 'navigation__button-tab';
  }

  return(
    <nav className="navigation header-bottom__navigaton">
      <Link className={tabIsActive("/")} to="/">Фильмы</Link>
      <Link className={tabIsActive("/channels")} to="/channels">Телеканалы</Link>
    </nav>
  )
}

export default Nav