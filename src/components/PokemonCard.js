import React from 'react'
import { Card } from 'semantic-ui-react'




class PokemonCard extends React.Component {

  state = {
    pokeImage: this.props.pokemon.sprites.front
  }
  
  toggleImage = () => {
    if (this.state.pokeImage === this.props.pokemon.sprites.front) {
      this.setState({
        pokeImage: this.props.pokemon.sprites.back
      })
    } 
    else {
      this.setState({
        pokeImage: this.props.pokemon.sprites.front
      })
    }
  }
  
  render() {
    
    return (
      <Card>
        <div onClick={this.toggleImage}>
          <div className="image">
            <img src={this.state.pokeImage} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
