import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'


class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchInput: ""
  }


  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(pokemonData => this.setState({
      pokemons: pokemonData
    }))
  }


  filterPokemons = (pokeName) => {
    this.setState({
      searchInput: pokeName
    })
  }


  addPokemon = (newPokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, newPokemon]
    })
  }

  
  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search filterPokemons={this.filterPokemons} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} searchInput={this.state.searchInput}/>
      </Container>
    )
  }
}

export default PokemonPage
