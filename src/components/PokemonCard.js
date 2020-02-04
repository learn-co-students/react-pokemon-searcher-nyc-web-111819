import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    faceUp: true
  }

  clickHandler = () => {
    console.log('clicked')
    this.setState({
      faceUp: !this.state.faceUp
    })
  }

  render() {
    return (
      <Card >
        <div onClick={this.clickHandler}>
          <div className="image">
            <img alt="oh no!" src={this.state.faceUp ? this.props.sprites.front : this.props.sprites.back} />
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
