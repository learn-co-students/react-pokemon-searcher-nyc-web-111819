import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={4}>
        {this.props.pokemons.map(pokemon => {return <PokemonCard key={pokemon.id} pokemon={pokemon}/>})}
      </Card.Group>
    )
  }
}

export default PokemonCollection
