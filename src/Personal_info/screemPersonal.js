import React, {Component} from 'react'
import PersonalForm from './atm-Personal-From'
class PersonalScreen extends Component {

    render(){
        return(
            <div className="atm-screen">
              <div className="atm-screen-content"><br/>
                <PersonalForm />
              </div>
            </div>
          
        );
    }
}

export default PersonalScreen