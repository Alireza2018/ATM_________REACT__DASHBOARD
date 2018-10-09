import React, { Component } from 'react'

import Key from './atm-keys'
import InteractionKeys from './interaction-keys'
import keyArray  from '../../utilities/keys'



class KeyPad extends Component {

  render() {
    return(
      <div className="atm-keypad">
        <div className="keypad">

          <div className="keypad-row">
            <Key number={keyArray[0].number} letters={keyArray[0].letters}/>
            <Key number={keyArray[1].number} letters={keyArray[1].letters}/>
            <Key number={keyArray[2].number} letters={keyArray[2].letters}/>
          </div>

          <div className="keypad-row">
            <Key number={keyArray[3].number} letters={keyArray[3].letters}/>
            <Key number={keyArray[4].number} letters={keyArray[4].letters}/>
            <Key number={keyArray[5].number} letters={keyArray[5].letters}/>
          </div>

          <div className="keypad-row">
            <Key number={keyArray[6].number} letters={keyArray[6].letters}/>
            <Key number={keyArray[7].number} letters={keyArray[7].letters}/>
            <Key number={keyArray[8].number} letters={keyArray[8].letters}/>
          </div>

          <div className="keypad-row">
            <Key number={keyArray[9].number} letters={keyArray[9].letters}/>
          </div>

        </div>

        <InteractionKeys />
      </div>
    )
  }
}

export default KeyPad
