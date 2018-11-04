import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { pinCodeChanged } from '../actions/user'


class Screen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn : false,
      redirectToGiftCards : false
    }
  }


  componentDidMount = () => {
    if(Object.keys(this.props.user.user).length !== 0) {
      this.setState({ isLoggedIn : true })
    }
  }

  handleChange = (e) => {
    this.props.pinCodeChanged(e.target.value)
  }

  goToGiftCards = () => {
    this.setState({ redirectToGiftCards : true })
  }

  render() {

    if(this.state.redirectToGiftCards) {
      return <Redirect push to='/gift-cards' />
    }

    return(
      <div className="atm-screen">
        <div className="atm-screen-content">
            {
              (Object.keys(this.props.user.user).length == 0) ?
                <div>
                  <div className="atm-screen-text">Enter Your Pin Code</div>
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="atm-pincode-form">
                      <input type="password" className="atm-pincode-input w-input" maxLength="256" name="pincode" data-name="pincode" id="pincode"
                        value={ this.props.user.pinCode }
                        onChange={this.handleChange}/>
                    </form>
                  </div>
                </div>
              :
                <div className="w-form">
                  <a onClick={this.goToGiftCards}>Select a gift card</a>
                  <a>Change Personal  Information</a>
                </div>
            }




        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user : state.user
})

export default connect(mapStateToProps, { pinCodeChanged })(Screen)
