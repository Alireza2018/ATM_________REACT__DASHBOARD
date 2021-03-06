import React, { Component } from 'react'
import { connect } from 'react-redux'

import { pinCodeChanged, login, isValidPincode } from '../../actions/user'

import cancel_icon from '../../Assets/images/cancel-icon.png'
import left_arrow_icon from '../../Assets/images/left-arrow-chevron.png'
import info_icon from '../../Assets/images/info_icon.png'

class InteractionKeys extends Component {


  pinCodeChanged = () => {
    let newPinCode = this.props.user.pinCode.substring(0, this.props.user.pinCode.length - 1)
    this.props.pinCodeChanged(newPinCode)
  }

  login = () => {

    var pinCode = this.props.user.pinCode
    var pattern = /^\d{4}$/
    var isValidPincode = pattern.exec(pinCode)

    if(isValidPincode != null) {
      this.props.login(pinCode)
      this.props.isValidPincode(true)
    }
    else {
      this.props.isValidPincode(false)
    }
   }

  render() {
    return(
      <div className="interaction-keys">
        <div className="keypad-row">
          <a href="#" className="keypad-button keypad-cancel-button w-inline-block">
          <img src={cancel_icon} alt="" className="keypad-icon"/>
          <div className="text-block-5">Cancel</div>
          </a>
        </div>

        <div className="keypad-row">
          <a href="#" className="keypad-button keypad-modify-button w-inline-block" onClick={this.pinCodeChanged}>
          <img src={left_arrow_icon} alt="" className="keypad-icon"/>
          <div className="text-block-4">Clear</div>
          </a>
        </div>
        <div className="keypad-row">
          <a href="#" className="keypad-button keypad-enter-button w-inline-block" onClick={this.login}>
          <img src={info_icon} alt="" className="keypad-icon"/>
          <div className="text-block-6">Enter</div>
          </a>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  user : state.user
})

export default connect(mapStateToProps, { pinCodeChanged, login, isValidPincode })(InteractionKeys)
