export default function userReducer( state = {

  pinCode : '',
  user : {},
  selectedKey : 0,
  error : ''
}, action) {
  switch(action.type) {
    case 'PIN_CODE_CHANGED':
      console.log('___________________ in reducer: ' + action.payload)
      state = {
        ...state,
        pinCode : action.payload
      }
      break
    case 'SUCCESSFUL_USER_LOGIN':
      state = {
        ...state,
        user : action.payload
      }
      break
    case 'FAILED_USER_LOGIN':
      state = {
        ...state,
        error : action.payload
      }
      break
    case 'NEW_KEY_IS_SELECTED':
      state = {
        ...state,
        selectedKey : action.payload
      }
      break;
    default:
      return state
  }

  return state
}
