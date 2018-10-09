import React, { Component } from 'react'

class Key extends Component {

  componentDidMount = () => {
    console.log('================= ' + this.props.letters.length)
  }

  render() {
    return(
      <div className="keypad-row-button">
        <div className="keypad-number">{this.props.number}</div>
        {
          (this.props.letters) ?
          <div className="keypad-letters">
            {
              this.props.letters.map( letter => { return letter })
            }
          </div>
          :
          null
        }

      </div>
    )
  }
}

export default Key
