import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemans.map(pokeman => <PokemonCard key = {pokeman.id} name = {pokeman.name} hp = {pokeman.stats[4].value} front = {pokeman.sprites.front} back = {pokeman.sprites.back}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
