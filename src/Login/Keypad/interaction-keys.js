import React, { Component } from 'react'

import cancel_icon from '../../Assets/images/cancel-icon.png'
import left_arrow_icon from '../../Assets/images/left-arrow-chevron.png'
import info_icon from '../../Assets/images/Info.png'

class InteractionKeys extends Component {

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
          <a href="#" className="keypad-button keypad-modify-button w-inline-block">
          <img src={left_arrow_icon} alt="" className="keypad-icon"/>
          <div className="text-block-4">Clear</div>
          </a>
        </div>
        <div className="keypad-row">
          <a href="#" className="keypad-button keypad-enter-button w-inline-block">
          <img src={info_icon} alt="" className="keypad-icon"/>
          <div className="text-block-6">Enter</div>
          </a>
        </div>
      </div>
    )
  }
}

export default InteractionKeys
