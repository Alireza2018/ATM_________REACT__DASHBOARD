export function pinCodeChanged(pinCode) {
  console.log('==================== ' + pinCode)
  return dispatch => {
    dispatch({ type : 'PIN_CODE_CHANGED', payload : pinCode })
  }
}
