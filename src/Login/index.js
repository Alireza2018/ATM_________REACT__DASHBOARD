import React, { Component } from 'react'


import Screen from './atm-screen'
import KeyPad from './Keypad/atm-keypad'


import menu_icon from '../Assets/images/menu_icon.png'
import PersonalScreen from '../Personal_info/atm-Personal-From';



class Index extends Component {
    
  
   render() {
    return(
      <div className="body">
        <div className="atm-machine-sidebar">
          <div className="atm-landing-page-image"></div>
        </div>

        <div className="atm-machine-container">
          <div className="atm-machine-navbar">
            <h4>Welcome to Main page of the ATM System</h4>
            <p><cite>Designed and developed by Alireza Shoaei - Nima Eivazzadeh kaljahi</cite></p>
              <img src={menu_icon} alt="" className="atm-navbar-responsive-icon"/>
            <div className="atm-responsive-sidebar"></div>
          </div>

          <div className="atm-utility">
            <Screen />
            <KeyPad />
                                
          </div>

        </div>
      </div>
    )
  }
}

export default Index
