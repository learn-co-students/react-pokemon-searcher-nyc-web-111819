import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  render() {

    let displayedPokemons = [...this.props.pokemons]

    if (this.props.searchInput) {
      displayedPokemons = displayedPokemons.filter(pokemon => pokemon.name.includes(this.props.searchInput))
    }
    
    let displayedPokemonsList = displayedPokemons.map(pokemon => 
      <PokemonCard 
      key={pokemon.id}
      pokemon={pokemon}
      />)
    
    return (
      <Card.Group itemsPerRow={6}>
        {displayedPokemonsList}
      </Card.Group>
    )
  }
}

export default PokemonCollection
