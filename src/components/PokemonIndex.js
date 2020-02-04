import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    data: [],
    sortedData: []
  }
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(response => response.json())
      .then(dataList => this.setState({data: dataList, sortedData: dataList}));
  }
  sieve = (e) => {
    let data = this.state.data.filter(pokeman => pokeman.name.slice(0,e.target.value.length) === e.target.value)
    this.setState({sortedData: data})
  }
  add = (item) => {
    this.setState({
      data: this.state.data.push(item)
    })
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm add = {this.add}/>
        <br />
        <Search onChange={this.sieve.bind(this)} />
        <br />
        <PokemonCollection pokemans = {this.state.sortedData}/>
      </Container>
    )
  }
}

export default PokemonPage
