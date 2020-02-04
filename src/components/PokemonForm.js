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

  handleSubmit = (e) => {
    this.setState({
      name: e.target.name.value,
      hp: e.target.hp.value,
      frontUrl: e.target.frontUrl.value,
      backUrl: e.target.backUrl.value
    }, () => {
      fetch('http://localhost:3000/pokemon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                sprites: {front: this.state.frontUrl, back: this.state.backUrl},
                stats: [0, 1, 2, 3, 4, {name: "hp", value: parseInt(this.state.hp)}]
            })
        }).then(resp => resp.json())
        .then(newPoke => this.props.newPokemon(newPoke))



    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
