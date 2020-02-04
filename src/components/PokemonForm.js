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

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }

  handleSubmit = (e) => {
    e.preventDefault() 
    let pokeObj = {
        "height": 10,
        "weight": 130,
        "name": this.state.name,
        "abilities": [
          "overgrow",
          "chlorophyll"
        ],
        "moves": [],
        "stats": [
          {
            "value": 80,
            "name": "special-defense"
          },
          {
            "value": 80,
            "name": "special-attack"
          },
          {
            "value": 63,
            "name": "defense"
          },
          {
            "value": 62,
            "name": "attack"
          },
          {
            "value": 60,
            "name": "speed"
          },
          {
            "value": this.state.hp,
            "name": "hp"
          }
        ],
        "types": [
          "grass",
          "poison"
        ],
        "sprites": {
          "front": this.state.frontUrl,
          "back": this.state.backUrl
        }
      }
      this.props.addPoke(pokeObj)
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
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInput}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleInput}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleInput}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleInput}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
