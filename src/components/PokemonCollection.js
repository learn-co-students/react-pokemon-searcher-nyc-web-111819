import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    console.log("collect", this.props)
    return (
      <Card.Group itemsPerRow={6}>
      {this.props.pokemons.map(pokemon=> { return <PokemonCard
      key = {pokemon.id}
      name ={pokemon.name}
      hpValue = {pokemon.stats ? pokemon.stats.find((item) =>  {return item.name === "hp"}).value : pokemon.hpValue}
      frontUrl = {pokemon.sprites ? pokemon.sprites.front : pokemon.frontUrul}
      backUrl = {pokemon.sprites ? pokemon.sprites.back : pokemon.backUrl}
      
  />})}
        <h1>Hello From Pokemon Collection</h1>
      </Card.Group>
    )
  }
}

export default PokemonCollection
