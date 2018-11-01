import axios from 'axios'
import { atmApiUrl } from './api-urls'

export function selectKey(index) {
  return dispatch => {
    dispatch({ type : 'NEW_KEY_IS_SELECTED', payload : index })
  }
}

export function pinCodeChanged(pinCode) {
  console.log('------------ pinCode in action:' + pinCode)
  return dispatch => {
    dispatch({ type : 'PIN_CODE_CHANGED', payload : pinCode })
  }
}

export function login(pinCode) {
  let url = `${atmApiUrl}/UserLogin`
  const data = {
    pinCode : pinCode
  }
  return dispatch => {
    axios.post(url, data)
      .then( (response) => {
        dispatch({ type : 'SUCCESSFUL_USER_LOGIN', payload : response.data })
      })
      .catch( (error) => {
        dispatch({ type : 'FAILED_USER_LOGIN', payload : error })
      })
  }
}
