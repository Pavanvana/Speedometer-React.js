// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="img-style"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="Speedometer"
          />
          <h1 className="speed-text">Speed is {speed}mph</h1>
          <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              onClick={this.onClickAccelerate}
              className="acclerate-btn button"
              type="button"
            >
              Accelerate
            </button>
            <button
              onClick={this.onClickBreak}
              className="break-btn button"
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
