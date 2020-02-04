import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    filteredPokemon: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(response => response.json())
    .then(pokemons => {
      this.setState({pokemons, filteredPokemon: pokemons})
    })
  }

  filterPokemon = (filter) => {
    this.setState({
      filteredPokemon: this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(filter))
    }, () => {console.log(this.state.filteredPokemon)})
  }

  addPokemon = (pokemon) => {
    this.setState(prevState => ({
      pokemons: [...prevState.pokemons, pokemon]
    }))
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.filterPokemon} />
        <br />
        <PokemonCollection pokemons={this.state.filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage

