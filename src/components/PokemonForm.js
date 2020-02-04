import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleHpChange = (event) => {
    this.setState({
      hp: event.target.value
    })
  }

  handleFrontImageChange = (event) => {
    this.setState({
      frontUrl: event.target.value
    })
  }
  handleBackImageChange = (event) => {
    this.setState({
      backUrl: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    
    let newPokemon = {
      height: null,
      weight: null,
      id: null,
      name: this.state.name,
      abilities: [],
      moves: [ ],
      stats: [
      {
      value: null,
      name: "special-defense"
      },
      {
      value: null,
      name: "special-attack"
      },
      {
      value: null,
      name: "defense"
      },
      {
      value: null,
      name: "attack"
      },
      {
      value: null,
      name: "speed"
      },
      {
      value: this.state.hp,
      name: "hp"
      }
      ],
      types: [],
      sprites: {
      front: this.state.frontUrl,
      back: this.state.backUrl
      }
      }
     this.handleFetch(newPokemon) 
     this.clearForm()
  }

  handleFetch = (newPokemon) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(response => response.json())
    .then(pokemonData => this.props.addPokemon(pokemonData))
  }

  clearForm = () => {
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }
  
  
  render() {

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleNameChange} value={this.state.name} fluid label="Name" placeholder="Name" name="name"/>
            <Form.Input onChange={this.handleHpChange} value={this.state.hp} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleFrontImageChange} value={this.state.frontUrl} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.handleBackImageChange} value={this.state.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
