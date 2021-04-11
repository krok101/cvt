import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { setModal, setUserName, setAuth } from '../store/actioncCreators'
import localСache from '../utils/localCache'


class Modal extends Component{
  constructor(){
    super()
  }

  componentDidMount(){
    let checkbox = document.getElementById('remember')
    checkbox.addEventListener('change', function(){
      let wrapCheckbox = document.getElementById('remember-wrap')
      this.checked ? wrapCheckbox.classList.add("active") : wrapCheckbox.classList.remove("active");
    })
  }

  componentWillUnmount(){
    let checkbox = document.getElementById('remember')
    checkbox.removeEventListener('change', function(){
      let wrapCheckbox = document.getElementById('remember-wrap')
      this.checked ? wrapCheckbox.classList.add("active") : wrapCheckbox.classList.remove("active");
    })
  }

  componentDidUpdate(){
    this.checkOpenModal()
  }

  onSendForm = () => {
    this.props.openModal(false)
    this.props.setAuth(true)
  }

  checkOpenModal(){
    let modalLogin = document.getElementById('modal-login')
    modalLogin.style.display = this.props.isOpenModal ? 'flex': 'none';
  }

  changeLogin = (data) => {
    this.props.setUserName(data.target.value)
    localСache.userName = data.target.value
  }

  render(){
    return(
      <div className="modal" id="modal-login">
        <div className="modal__background"></div>
        <div className="modal__container block-modal">
          <div className="modal-block__label">Вход</div>
          <form className="form-login">
            <input className="form-login__input" onBlur={this.changeLogin} placeholder="Логин"/>
            <input className="form-login__input" placeholder="Пароль"/>
            <div className="form-login__checkbox checkbox-remember">
              <div id="remember-wrap" className="checkbox-remember__checkbox">
                <img src="img/icons/active.svg"/>
                <input id="remember" type="checkbox"/>
              </div>
              <div className="checkbox-remember__title">Запомнить</div>
            </div>
          </form>
          <div className="modal-block__button">
            <Button title="Войти" onClick={this.onSendForm}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    isOpenModal: state.isOpenModal,
    userName: state.userName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (data) => dispatch(setModal(data)),
    setUserName: (data) => dispatch(setUserName(data)),
    setAuth: (data) => dispatch(setAuth(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)