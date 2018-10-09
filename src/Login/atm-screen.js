import React, { Component } from 'react'


class Screen extends Component {

  render() {
    return(
      <div className="atm-screen">
        <div className="atm-screen-content">
          <div className="atm-screen-text">Enter Your Pin Code</div>
          <div className="w-form">
            <form id="email-form" name="email-form" data-name="Email Form" className="atm-pincode-form">
              <input type="password" className="atm-pincode-input w-input" maxLength="256" name="pincode" data-name="pincode" id="pincode"/>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default Screen
