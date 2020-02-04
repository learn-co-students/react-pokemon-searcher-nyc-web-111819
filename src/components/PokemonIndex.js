import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    pokeSearchInput: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokeData => this.setState({ pokemon: pokeData }))
  }

  pokeSearchHandler(input) {
    this.setState({pokeSearchInput: input.toLowerCase()})
  }

  addPoke = (pokeObj) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(pokeObj)
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      let newPokeArr = [data, ...this.state.pokemon]
      this.setState({pokemon: newPokeArr})
    })
  }

  render() {
    let displayedPoke = this.state.pokemon.filter(poke => poke.name.toLowerCase().includes(this.state.pokeSearchInput))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPoke={this.addPoke}/>
        <br />
        <Search onChange={(e) => this.pokeSearchHandler(e.target.value)} value={this.state.pokeSearchInput} />
        <br />
        <PokemonCollection pokemon={displayedPoke} />
      </Container>
    )
  }
}

export default PokemonPage
