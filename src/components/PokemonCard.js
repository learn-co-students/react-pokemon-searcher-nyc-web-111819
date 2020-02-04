import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    frontPic: true
  }

  flipPic = () => {
    this.setState({
      frontPic: !this.state.frontPic
    })
  }

  render() {
    return (
      <Card>
        <div onClick={this.flipPic}>
          <div className="image">
            <img src={this.state.frontPic ? this.props.sprites.front : this.props.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
