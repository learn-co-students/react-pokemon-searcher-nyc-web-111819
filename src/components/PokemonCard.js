import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    faceUp: true
  }

  imageHandler = () => {
    this.setState({
      faceUp: !this.state.faceUp
    })
  }

  render() {
    return (
      <Card onClick={this.imageHandler}>
        <div>
          <div className="image">
            <img alt="oh no!" src={ this.state.faceUp ? this.props.front : this.props.back } />
          </div>
          <div className="content">
            <div className="header">{ this.props.name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { this.props.hp } hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
