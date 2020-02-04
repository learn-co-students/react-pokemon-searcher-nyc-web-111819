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

handleChange=(event)=>{
  // debugger

  this.setState({[event.target.name]: event.target.value})
// console.log(this.state)
// if (event.target.name === "name"){
//   this.setState({
//     name: event.target.value
//   })}
// if (event.target.name === "hp"){
//   this.setState({
//     hp: event.target.value
//   })}
// if (event.target.name === "frontUrl"){
//   this.setState({
//     frontUrl: event.target.value 
//   })}
// if (event.target.name === "backUrl"){
//   this.setState({
//     backUrl: event.target.value
//   })}
}


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => this.props.handleSubmit(this.state)} onChange = {this.handleChange}>
          <Form.Group widths="equal">
            <Form.Input type = "text" value={this.state.name} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input type = "text" value={this.state.hp} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input type = "text" value={this.state.frontUrl} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input type = "text" value={this.state.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl"/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
