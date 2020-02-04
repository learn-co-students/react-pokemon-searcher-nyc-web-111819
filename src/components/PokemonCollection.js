import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  
  render() {
    // apply filter
    let displayPokemons = this.props.pokemons.filter( poke => poke.name.includes(this.props.searchInput) )
    
    
    this.props.hpSorted && displayPokemons.sort((a, b) => b.hp - a.hp)
    let renderPokemons = displayPokemons.map( poke => <PokemonCard key={poke.id} {...poke} /> )


    return (
      <Card.Group itemsPerRow={6}>
        {renderPokemons}
      </Card.Group>
    )
  }
}

export default PokemonCollection
