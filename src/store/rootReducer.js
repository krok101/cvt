import { SET_MODAL, SET_USER_NAME, SET_AUTH } from './actions'

const initialState = {
  isOpenModal: false,
  userName: '',
  isAuth: false ,
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case SET_USER_NAME: return { ...state, userName: action.payload };
      case SET_MODAL: return { ...state, isOpenModal: action.payload };
      case SET_AUTH: return { ...state, isAuth: action.payload };
      default: return state;
  }
}

export default rootReducer 