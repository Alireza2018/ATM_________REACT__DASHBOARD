import React, { Component } from 'react'
import { connect } from 'react-redux'

import { pinCodeChanged, selectKey } from '../../actions/user'

import Key from './atm-keys'
import InteractionKeys from './interaction-keys'
import keyArray  from '../../utilities/keys'



class KeyPad extends Component {

  constructor(props) {
    super(props)
    this.currentClickIndex = 0
    this.state = {
      selectedChar : ''
    }
  }

  handleClick = (keyArray) => {


    let numberOfClicks = keyArray.letters.length + 1

    if(this.props.user.selectedKey != keyArray.number) {
      this.currentClickIndex = 0
    }

    if(this.currentClickIndex == 0) {

      this.setState(
        {selectedChar : this.state.selectedChar.concat(keyArray.number)},
        () => {
          this.props.pinCodeChanged(this.state.selectedChar)
          this.currentClickIndex = this.currentClickIndex + 1
          this.props.selectKey(keyArray.number)
          console.log('=================== numberOfClicks: ' + numberOfClicks)
          console.log('=================== this.currentClickIndex: ' + this.currentClickIndex)
          console.log('=================== pinCode: ' + this.props.user.pinCode)
        }
      )


    }
    else {
      if(this.currentClickIndex > 0 && this.currentClickIndex < numberOfClicks) {
        console.log('----------- i am here')
        this.setState(
          {selectedChar : this.state.selectedChar.concat(keyArray.letters[this.currentClickIndex - 1])},
          () => {
            this.props.pinCodeChanged(this.state.selectedChar)
            this.currentClickIndex = this.currentClickIndex + 1

            if(this.currentClickIndex == numberOfClicks) {
              this.currentClickIndex = 0
            }

            this.props.selectKey(keyArray.number)
          }
        )

      }
    }




  }

  render() {
    return(
      <div className="atm-keypad">
        <div className="keypad">

          <div className="keypad-row">
            <Key number={keyArray[0].number} letters={keyArray[0].letters} onClick={() => {this.handleClick(keyArray[0])}}/>
            <Key number={keyArray[1].number} letters={keyArray[1].letters} onClick={() => {this.handleClick(keyArray[1])}}/>
            <Key number={keyArray[2].number} letters={keyArray[2].letters} onClick={() => {this.handleClick(keyArray[2])}}/>
          </div>

          <div className="keypad-row">
            <Key number={keyArray[3].number} letters={keyArray[3].letters} onClick={() => {this.handleClick(keyArray[3])}}/>
            <Key number={keyArray[4].number} letters={keyArray[4].letters} onClick={() => {this.handleClick(keyArray[4])}}/>
            <Key number={keyArray[5].number} letters={keyArray[5].letters} onClick={() => {this.handleClick(keyArray[5])}}/>
          </div>

          <div className="keypad-row">
            <Key number={keyArray[6].number} letters={keyArray[6].letters} onClick={() => {this.handleClick(keyArray[6])}}/>
            <Key number={keyArray[7].number} letters={keyArray[7].letters} onClick={() => {this.handleClick(keyArray[7])}}/>
            <Key number={keyArray[8].number} letters={keyArray[8].letters} onClick={() => {this.handleClick(keyArray[8])}}/>
          </div>

          <div className="keypad-row">
            <Key number={keyArray[9].number} letters={keyArray[9].letters} onClick={() => {this.handleClick(keyArray[9])}}/>
          </div>

        </div>

        <InteractionKeys />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user : state.user
})

export default connect(mapStateToProps, { pinCodeChanged, selectKey })(KeyPad)
