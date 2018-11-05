import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getGiftCards } from '../actions/user'

import Cards from './gift-cards'

class Screen extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount = (card) => {
    this.props.getGiftCards()
  }

  selectCard = (amount) => {
    alert('You have selected: ' + amount + ' NOK gift card')
   
  }

  render() {

    let cardItems = this.props.user.giftCards.map( (card, i) => {
      return(
        <Cards amount={card.amount} cardNumber={card.cardNumber} cssIdentifier={i} key={i} 
          onClick={ () => {this.selectCard(card.amount)} }/>
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
