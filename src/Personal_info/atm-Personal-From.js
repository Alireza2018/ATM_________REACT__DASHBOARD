import React, {Component} from 'react'
import { connect } from 'react-redux'

import { getUserProfile, setProfileData } from '../actions/user'

import {Label} from 'react-bootstrap'
import {Form, Text, Radio, RadioGroup, TextArea, Checkbox} from 'react-form'

class PersonalForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Name : '',
            Address : '',
            PhoneNumber : ''
        }
    }

    componentDidMount = () => {
        this.props.getUserProfile(this.props.user.user.profileId)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        const newProfile = {
            Name : this.state.name,
            Address : this.state.address,
            PhoneNumber : this.state.phoneNumber
        }
        console.log('------------- this.state: ' + JSON.stringify(this.state))
        this.props.setProfileData(newProfile)
    }

    render(){
        return(

            <div className="atm-utility">
                <form>
                <h1>Please Fill in your personal information</h1>

                <br/>

                <div>
                    <fieldset>
                    <legend>Personal information</legend>
                    <input type="text" className="atm-pincode-input w-input" maxLength="256" placeholder="name" name="name" 
                        
                        onChange={this.handleChange}/><br/>
                    <input type="text" className="atm-pincode-input w-input"  placeholder="phone" name="phoneNumber"    
                        
                        onChange={this.handleChange}/><br/>
                    <input type="text" className="atm-pincode-input w-input" placeholder="address" maxLength="256" name="address" 
                        
                        onChange={this.handleChange}/>
                    <br/>
                    </fieldset>
                </div>
            
                </form>
            </div>
               
            
        );
    }
}

const mapStateToProps = state => ({
    user : state.user
  })

export default connect(mapStateToProps, { getUserProfile, setProfileData })(PersonalForm)