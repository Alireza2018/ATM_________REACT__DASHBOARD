import React, { Component } from 'react'
import { connect } from 'react-redux'

import { pinCodeChanged } from '../actions/user'


class Screen extends Component {

  handleChange = (e) => {
    this.props.pinCodeChanged(e.target.value)
  }

  render() {
    return(
      <div className="atm-screen">
        <div className="atm-screen-content">
          <div className="atm-screen-text">Enter Your Pin Code</div>
          <div className="w-form">
            <form id="email-form" name="email-form" data-name="Email Form" className="atm-pincode-form">
              <input type="password" className="atm-pincode-input w-input" maxLength="256" name="pincode" data-name="pincode" id="pincode"
                value={ this.props.user.pinCode }
                onChange={this.handleChange}/>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user : state.user
})

export default connect(mapStateToProps, { pinCodeChanged })(Screen)
