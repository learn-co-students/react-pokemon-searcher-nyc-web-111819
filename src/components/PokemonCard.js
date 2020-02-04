import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }
  
  toggleSprite = () => {
    this.setState({
      front: !this.state.front
    })
  }

  hpStat = () => {
    let stats = this.props.pokemon.stats
    let hp = stats.filter(stat => stat.name === 'hp')
    return hp[0].value
  }

  render() {
    let {sprites, name} = this.props.pokemon

    return (
      <Card>
        <div onClick={this.toggleSprite}>
          <div className="image">
            <img alt="oh no!" src={this.state.front ? sprites.front : sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{name[0].toUpperCase() + name.substring(1)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.hpStat()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
