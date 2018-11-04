import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getGiftCards } from '../actions/user'

import Cards from './gift-cards'

class Screen extends Component {

  componentDidMount = () => {
    this.props.getGiftCards()
  }

  render() {

    let cardItems = this.props.user.giftCards.map( (card, i) => {
      return(
        <Cards amount={card.amount} cardNumber={card.cardNumber} cssIdentifier={i} key={i} />
      )
    })

    return(
      <div className="atm-screen">
        <div className="atm-screen-content"><br/>
          { cardItems }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user : state.user
})

export default connect(mapStateToProps , { getGiftCards })(Screen)
