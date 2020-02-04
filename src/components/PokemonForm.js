import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  initialState = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  constructor() {
    super()

    this.state = this.initialState
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let pokemon = {
      name: this.state.name,
      stats: [{name: 'hp', value: parseInt(this.state.hp)}],
      sprites: {front: this.state.frontUrl, back: this.state.backUrl}
    }
    if (this.state.name && this.state.frontUrl && this.state.hp && this.state.backUrl){
      console.log('made it')
      fetch(`http://localhost:3000/pokemon`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          accepts: 'application/json'
        },
        body: JSON.stringify(pokemon)
      })
      .then(response => response.json())
      .then(pokemon => {
        this.props.addPokemon(pokemon)
        this.setState(this.initialState)
      })
    }
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
