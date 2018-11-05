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

export function isValidPincode(flag) {
  return dispatch => {
    dispatch({ type : 'IS_VALID_PINCODE', payload : flag })
  }
}

export function setProfileData(newProfile) {
  return dispatch => {
    dispatch({ type : 'SET_PROFILE_DATA', payload : newProfile })
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

export function getGiftCards() {
  let url = `${atmApiUrl}/GiftCards`

  return dispatch => {
    axios.get(url)
      .then( (response) => dispatch({ type : 'GET_ALL_GIFTCARDS_SUCCESS', payload : response.data }) )
      .catch( (error) => dispatch({ type : 'GET_ALL_GIFTCARDS_ERROR', payload : error }))
  }
}

export function getUserProfile(profileId) {
  let url = `${atmApiUrl}/Profile/${profileId}`

  return dispatch => {
    axios.get(url)
         .then( (response) => dispatch({ type : 'GET_USER_PROFILE_SUCCESS' , payload : response.data }))
         .catch( (error) => dispatch({ type : 'GET_USER_PROFILE_ERROR' , payload : error }))
  }
}

export function updateProfile(profileId, newProfile) {
  let url = `${atmApiUrl}/Profile/${profileId}`

  return dispatch => {
    axios.put(url, newProfile)
      .then( (response) => dispatch({ type : 'UPDATE_PROFILE_SUCCESS', payload : response.data }) )
      .catch( (error) => dispatch({ type : 'UPDATE_PROFILE_ERROR', payload : error }) )
  }
}
