export default function userReducer( state = {

  pinCode : ''
}, action) {
  switch(action.type) {
    case 'PIN_CODE_CHANGED':
      console.log('=================== in reducer: ' + action.payload);
      state = {
        ...state,
        pinCode : action.payload
      }
      break
    default:
      return state
  }

  return state
}
