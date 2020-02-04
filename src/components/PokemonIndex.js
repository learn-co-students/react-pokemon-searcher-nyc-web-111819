import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const api = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchInput: "",
    hpSorted: false
  }

  componentDidMount() {
    this.fetchPokemons()
  }
  
  fetchPokemons = () => {
    fetch(api)
    .then(resp => resp.json())
    .then(data => {
      
      let pokemons = data.map(item => {
        return {
          id: item.id,
          name: item.name,
          hp: item.stats.find(stat => stat.name === 'hp').value,
          front: item.sprites.front,
          back: item.sprites.back
        }
      })
      
      this.setState({
        pokemons: pokemons
      })
    })
  }

  onChange = (value) => {
    this.setState({
      searchInput: value
    })
  }

  postPoke = (pokeObj) => {
    const configObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(pokeObj)
    }
    fetch(api, configObj)
    .then(resp => resp.json())
    .then(item => { 
      this.setState({
        pokemons: [...this.state.pokemons, item]
      })
    })
  }

  clickHandler = () => {
    this.setState({
      hpSorted: !this.state.hpSorted
    })
  }
    
  render(){
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm postPoke={this.postPoke} />
        <br />
        <Search onChange={this.onChange} searchInput={this.state.searchInput} clickHandler={this.clickHandler} />
        <br />
        <PokemonCollection 
          pokemons={this.state.pokemons} 
          searchInput={this.state.searchInput} 
          hpSorted={this.state.hpSorted} />
      </Container>
    )
  }
}

export default PokemonPage
