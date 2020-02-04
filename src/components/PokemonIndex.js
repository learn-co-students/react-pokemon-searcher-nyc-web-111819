import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const api = 'http://localhost:3000/pokemon'


class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchInput: ""
  }

  
  fetchPokemons = () => {
    fetch(api)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemons: data
      })
    })
  }
  
  componentDidMount(){
    this.fetchPokemons()
  }

  onChange = (event) => {
    console.log('changing!')
    this.setState({
      searchInput: event.target.value
    })
  }

  handleSubmit = (stateObj) => {
    // const postObj = {
    //   name: stateObj.name,
    //   stats: [{
    //     value: stateObj.hp,
    //     name: 'hp'
    //   }],
    //   sprites:{
    //     front: stateObj.front,
    //     back: stateObj.back
    //   }
    // }
      const postObj = {
        height: null,
        weight: null,
        id: null,
        name: stateObj.name,
        abilities: [
          null
        ],
        moves: [
        null
        ],
        stats: [
        {
        value: null,
        name: null
        },
        {
        value: null,
        name: null
        },
        {
        value: null,
        name: null
        },
        {
        value: stateObj.hp,
        name: "hp"
        },
        {
        value: null,
        name: null
        },
        {
        value: null,
        name: null
        }
        ],
        types: [
        null
        ],
        sprites: {
        front: stateObj.front,
        back: stateObj.back
        }
        }
    
    fetch(api, {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(postObj)
    })
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState({
          pokemons: [...this.state.pokemons, pokemon]})
  })
}
  



  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search onChange={this.onChange} searchInput={this.state.searchInput}/>
        <br />
        <PokemonCollection 
          pokemons={this.state.pokemons}
          searchInput={this.state.searchInput}/>
      </Container>
    )
  }
}

export default PokemonPage
