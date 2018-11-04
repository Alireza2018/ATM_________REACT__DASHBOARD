import React, { Component } from 'react'

import './gift-cards.css'

import chip_icon from '../Assets/images/chip.png'
import visa_icon from '../Assets/images/visa.png'

class Cards extends Component {

  componentDidMount = () => {
    console.log('__________________ cssIdentifier' + this.props.cssIdentifier)
  }

  render() {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 126 231">
        <g id="Gift_Card_purple" data-name="Gift Card purple" transform="translate(-450 -70)">
        <g id="Mask_Group_21-6" data-name="Mask Group 21" className="cls-26">
          <g id="Path_12-6" data-name="Path 12" className={`cls-4${this.props.cssIdentifier}`} transform="translate(366.213 71)">
            <path className="cls-30" d="M 299.0841674804688 170.5 L 23 170.5 C 19.9622917175293 170.5 17.01575088500977 169.9051666259766 14.24212551116943 168.7320404052734 C 11.56291675567627 167.5988311767578 9.156625747680664 165.9764099121094 7.090083599090576 163.909912109375 C 5.023583889007568 161.8433685302734 3.401167154312134 159.4370880126953 2.267958641052246 156.7578735351563 C 1.094833731651306 153.9842529296875 0.5000004172325134 151.0377044677734 0.5000004172325134 148 L 0.5000004172325134 23 C 0.5000004172325134 19.9622917175293 1.094833731651306 17.01575088500977 2.267958641052246 14.24212455749512 C 3.401167154312134 11.56291675567627 5.023583889007568 9.156624794006348 7.090083599090576 7.090083122253418 C 9.156625747680664 5.02358341217041 11.56291675567627 3.401166677474976 14.24212551116943 2.267958402633667 C 17.01575088500977 1.094833374023438 19.9622917175293 0.5 23 0.5 L 299.0841674804688 0.5 C 302.1218872070313 0.5 305.0684204101563 1.094833374023438 307.842041015625 2.267958402633667 C 310.521240234375 3.401166677474976 312.9275512695313 5.02358341217041 314.9940795898438 7.090083122253418 C 317.0605773925781 9.156624794006348 318.6830139160156 11.56291675567627 319.8162231445313 14.24212455749512 C 320.9893188476563 17.01575088500977 321.5841674804688 19.9622917175293 321.5841674804688 23 L 321.5841674804688 148 C 321.5841674804688 151.0377044677734 320.9893188476563 153.9842529296875 319.8162231445313 156.7578735351563 C 318.6830139160156 159.4370880126953 317.0605773925781 161.8433685302734 314.9940795898438 163.909912109375 C 312.9275512695313 165.9764099121094 310.521240234375 167.5988311767578 307.842041015625 168.7320404052734 C 305.0684204101563 169.9051666259766 302.1218872070313 170.5 299.0841674804688 170.5 Z"/>
            <path className="cls-32" d="M 23 1 C 20.02957153320313 1 17.14852905273438 1.58154296875 14.43692016601563 2.72845458984375 C 11.81729125976563 3.836456298828125 9.46441650390625 5.422882080078125 7.44366455078125 7.44366455078125 C 5.422882080078125 9.46441650390625 3.836456298828125 11.81729125976563 2.72845458984375 14.43692016601563 C 1.58154296875 17.14854431152344 1 20.02958679199219 1 23 L 1 148 C 1 150.9704132080078 1.58154296875 153.8514556884766 2.72845458984375 156.5630798339844 C 3.836456298828125 159.1827087402344 5.422882080078125 161.5355834960938 7.44366455078125 163.5563354492188 C 9.46441650390625 165.5771179199219 11.81729125976563 167.1635437011719 14.43692016601563 168.2715454101563 C 17.14852905273438 169.41845703125 20.02957153320313 170 23 170 L 299.0841674804688 170 C 302.0545959472656 170 304.9356384277344 169.41845703125 307.6472473144531 168.2715454101563 C 310.2668762207031 167.1635437011719 312.6197509765625 165.5771179199219 314.6405029296875 163.5563354492188 C 316.6612854003906 161.5355834960938 318.2477111816406 159.1827087402344 319.355712890625 156.5630798339844 C 320.5026245117188 153.8514556884766 321.0841674804688 150.9704132080078 321.0841674804688 148 L 321.0841674804688 23 C 321.0841674804688 20.02958679199219 320.5026245117188 17.14854431152344 319.355712890625 14.43692016601563 C 318.2477111816406 11.81729125976563 316.6612854003906 9.46441650390625 314.6405029296875 7.44366455078125 C 312.6197509765625 5.422882080078125 310.2668762207031 3.836456298828125 307.6472473144531 2.72845458984375 C 304.9356384277344 1.58154296875 302.0545959472656 1 299.0841674804688 1 L 23 1 M 23 0 L 299.0841674804688 0 C 311.7867126464844 0 322.0841674804688 10.29745483398438 322.0841674804688 23 L 322.0841674804688 148 C 322.0841674804688 160.7025451660156 311.7867126464844 171 299.0841674804688 171 L 23 171 C 10.29745483398438 171 0 160.7025451660156 0 148 L 0 23 C 0 10.29745483398438 10.29745483398438 0 23 0 Z"/>
          </g>
        </g>
        <text id="_2453_5367_8759_2314-6" data-name="2453  5367  8759  2314" className="cls-14" transform="translate(390 195) scale(1.5)"><tspan x="0" y="0" xmlSpsace="preserve">{this.props.cardNumber}</tspan></text>
        <text id="_600_NOK" data-name="600 NOK" className="cls-15" transform="translate(564.6 110.94)"><tspan x="0" y="0">{this.props.amount} NOK</tspan></text>
        <rect id="chip-6" data-name="chip" className="cls-16" width="38" height="38" transform="translate(407 132)"/>
        <image id="image" width="108" height="35" xlinkHref={chip_icon} transform="translate(350 140)"/>
        <text id="Gift_Card-7" data-name="Gift Card" className="cls-17" transform="translate(407 114)"><tspan x="0" y="0">Gift Card</tspan></text>
        <image id="image" width="98" height="35" xlinkHref={visa_icon} transform="translate(580 190)"/>
        <use id="Visa_Inc._logo.svg-6" data-name="Visa_Inc._logo.svg" transform="translate(553 190)" xlinkHsref="#image"/>
      </g>
    </svg>
    )
  }
}

export default Cards
