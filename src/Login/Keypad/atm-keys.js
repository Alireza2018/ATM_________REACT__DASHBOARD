import React, { Component } from 'react'

class Key extends Component {

  componentDidMount = () => {
  }



  render() {
    return(
      <div className="keypad-row-button" onClick={this.props.onClick}>
        <div className="keypad-number">{this.props.number}</div>
          <div className="keypad-letters">
            {
              this.props.letters.map( letter => { return letter })
            }
          </div>
      </div>
    )
  }
}

export default Key
