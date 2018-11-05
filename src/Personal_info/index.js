import React, {Component} from 'react'

import menu_icon from '../Assets/images/menu_icon.png'
import KeyPad from './Keypad/atm-keypad'
import PersonalScreen from './screemPersonal';



class Index extends Component {

    render(){
        return(
            <div className="body">
        <div className="atm-machine-sidebar">
          <div className="atm-landing-page-image"></div>
        </div>

        <div className="atm-machine-container">
          <div className="atm-machine-navbar">
            <h3>Welcome to Personal Information page</h3>
              <img src={menu_icon} alt="" className="atm-navbar-responsive-icon"/>
            <div className="atm-responsive-sidebar"></div>
          </div>

          <div className="atm-utility">
          <PersonalScreen/>
          <KeyPad />
          
          </div>

          </div>

        </div>
      
        );
    }
}

export default Index