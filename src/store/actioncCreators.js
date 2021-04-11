import { SET_USER_NAME, SET_MODAL, SET_AUTH } from './actions';

export const setUserName = (payload) => {
  return { 
    type: SET_USER_NAME,
    payload
  };
}

export const setModal = (payload) => {
  return {
    type: SET_MODAL,
    payload
  }
}

export const setAuth = (payload) => {
  return {
    type: SET_AUTH,
    payload
  }
}
