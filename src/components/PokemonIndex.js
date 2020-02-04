import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {


  state = {
    pokemons: [],
    search: ""
  }

  componentDidMount(){
    fetch(API).then(resp => resp.json())
    .then(result => this.setState({
      pokemons: result
    }))
  }

  searchByName = (value) => {
    console.log(value)
    this.setState({
      search: value
    })
  }

  newPokemon = (newPoke) => {
    this.setState(prevState => ({
      pokemons: {...prevState, newPoke}
    }))
  }



  render() {
    // console.log(this.state.pokemons)
    let filterPokemon = this.state.pokemons.filter(el => el.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
    console.log(filterPokemon)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.newPokemon} />
        <br />
        <Search onChange={(e) => this.searchByName(e.target.value)} />
        <br />
        <PokemonCollection pokemons={filterPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
