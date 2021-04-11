import React, { Component } from 'react'
import Button from '../Button'
import Logo from './logo'
import Search from './search'
import Nav from './navigation'
import { connect } from 'react-redux'
import { setModal, setUserName, setAuth } from '../../store/actioncCreators'

class Header extends Component{
  constructor(){
    super()
  }

  logIn(){
    console.log("++++++");
    this.props.openModal(true)
  }

  logOut(){
    this.props.setAuth(false)
  }

  checkAuth(){
    let { isAuth, userName } = this.props
    if(isAuth){
      return (
        <>
          <div className="auth-block__name" onClick={this.logIn.bind(this)}>{userName}</div>
          <div className="auth-block__logout" onClick={this.logOut.bind(this)}>Выйти</div>
        </>
      )
    } else{
      return <Button title="Войти" onClick={this.logIn.bind(this)}/>
    }
  }

  render(){
    return(
      <header className="content">
        <div className="header-top">
          <Logo/>
          <Search/>
          <div className="auth-block">
            {this.checkAuth()}
          </div>
        </div>
        <div className="header-bottom">
          <Nav/>
        </div>
      </header>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    isAuth: state.isAuth,
    userName: state.userName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (data) => dispatch(setModal(data)),
    setUserName: (data) => dispatch(setUserName(data)),
    setAuth: (data) => dispatch(setAuth(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)