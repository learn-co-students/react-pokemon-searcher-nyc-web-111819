import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  imgHandler = (e) => {
    if (e.target.src === this.props.sprites.front) {
      e.target.src = this.props.sprites.back
    } else if (e.target.src === this.props.sprites.back) {
      e.target.src = this.props.sprites.front
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt={this.props.name} src={this.props.sprites.front} onClick={this.imgHandler}/>
          </div>
          <div className="content">
    <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats[5].value} {this.props.stats[5].name}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
