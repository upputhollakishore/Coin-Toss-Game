// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    totalTails: 0,
    headingTails: 0,
    tails: 0,
  }

  onChangeHeadTail = () => {
    const {imgUrl, totalTails, headingTails, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    const updateUrl =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    this.setState({imgUrl: updateUrl})
    tossResult === 0
      ? this.setState(prevState => ({headingTails: prevState.headingTails + 1}))
      : this.setState(prevState => ({tails: prevState.tails + 1}))

    this.setState(prevState => ({totalTails: prevState.totalTails + 1}))
  }
  render() {
    const {imgUrl, totalTails, headingTails, tails} = this.state
    return (
      <div className="bg-container">
        <div className="bottom-container">
          <h1 className="heading">Coin Toss Game</h1>
          <div className="headtails-flex">
            <p className="head-or-tails">Heads (or) Tails</p>
            <img src={imgUrl} className="image" alt="toss result" />
            <button className="button" onClick={this.onChangeHeadTail}>
              Toss Coin
            </button>
          </div>

          <div className="flex-container">
            <p className="total-toss">Total: {totalTails}</p>
            <p className="total-toss">Heads: {headingTails}</p>
            <p className="total-toss">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
