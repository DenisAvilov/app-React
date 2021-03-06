import { usersApi, authApi } from "../api/Api";
import { stopSubmit } from "redux-form";

const IS_LOGIN = 'FIRST-APP/LOGIN/IS-LOGIN';
const IS_LOGIN_IN = 'FIRST-APP/LOGIN/IS-LOGIN-IN';

let initialState = {
  id: null,
  login: null,
  email: null,
  isYou: false
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGIN: {

      return {
        ...state,
        id: action.id,
        login: action.login,
        email: action.email,
        isYou: action.isYou
      }
    }
    case IS_LOGIN_IN: {
      return {
        ...state,
        id: action.id
      }
    }

    default: {
      return { ...state }
    }
  }
}

export default login;
export const is_login = (id, login, email, isYou) => ({ type: IS_LOGIN, id, login, email, isYou })
export const iSoutLogin = () => async (distpath) => {
  let response = await authApi.loginOut()
  if (response.data.resultCode === 0) {
    distpath(is_login(null, null, null, false))

  }


}
export const is_login_in = (email, password, rememberMe = false) => async (distpath) => {
  let response = await authApi.loginPost(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    let response = await authApi.getAuthMe()
    distpath(is_login(response.data.data.id, response.data.data.login, response.data.data.email, true))
  }
  else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Не коректный логин или пароль";
    distpath(stopSubmit("contackProfile", { _error: message }))
  }
}

export const login_success = () => {
  return async (distpath) => {
    //диспатч может вернуть то что нам нужно  
    let response = await usersApi.getAuthMe()
    if (response.data.resultCode === 0) {
      distpath(is_login(response.data.data.id,
        response.data.data.login, response.data.data.email, true))
    }
  }


}


