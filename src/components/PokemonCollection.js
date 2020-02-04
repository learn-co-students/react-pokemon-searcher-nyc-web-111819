import React, { Children } from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // the shittiest of shitty filters
    // let filteredPokemons = this.props.pokemons.filter(poke => poke.name === this.props.searchInput)
    // shitty filter
    // let filteredPokemons = this.props.pokemons.filter(poke => poke.name.includes(this.props.searchInput))
    // super filter and a lil different
    let filteredPokemons = this.props.pokemons.filter(poke => poke.name.slice(0, this.props.searchInput.length) === this.props.searchInput)
    let displayedPokemons = filteredPokemons.map(poke => <PokemonCard key={poke.id} {...poke}/>)
    return (
      <Card.Group itemsPerRow={6}>
        {displayedPokemons}
      </Card.Group>
    )
  }
}

export default PokemonCollection