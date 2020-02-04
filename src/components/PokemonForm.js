import React from 'react'
import { Form } from 'semantic-ui-react'

const emptyState = {
  name: '',
  hp: '',
  front: '',
  back: ''
}

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = {...emptyState}
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const pokeObj = {
      name: this.state.name,
      stats: [{
        value: this.state.hp,
        name: 'hp'
      }],
      sprites: {
        front: this.state.front,
        back: this.state.back
      }
    }
    this.setState({
      ...emptyState
    })
    this.props.postPoke(pokeObj)
  }

  handleChange = (target) => {
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => this.handleSubmit(event)} onChange={(event) => this.handleChange(event.target)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value={this.state.front}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value={this.state.back}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
