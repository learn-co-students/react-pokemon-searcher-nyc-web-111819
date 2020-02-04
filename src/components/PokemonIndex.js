import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

state = {
  pokemons: [],
  filteredPokemons: []
}


componentDidMount(){

  fetch('http://localhost:3000/pokemon')
  .then(res=> res.json())
  .then(pokemons=>{

    this.setState({pokemons: pokemons})
    console.log(this.state)
  })
}



  handleSubmit=(cardState)=>{
    console.log("submitted", cardState)
    fetch('http://localhost:3000/pokemon', {

      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(cardState)
    })
    .then(res => res.json())
    .then( pokemon=> {
      console.log(pokemon)
      this.setState({pokemons: [...this.state.pokemons, pokemon]})
    })
  }

    onChange(){
      // console.log("Django Onchange")
    }
    
    filterPoke=(e)=>{
    let filteredPokemonsArray = [...this.state.pokemons]
     let  filteredPokemonsArray2 = filteredPokemonsArray.filter((pokemon) => 
        pokemon.name.includes(e.target.value)   
      )
       this.setState({filteredPokemons: filteredPokemonsArray2 }, () => {
         console.log("filtered", this.state.filteredPokemons)
       })}
    
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit = {this.handleSubmit}/>
        <br />
        <Search onChange={(e) => 
          
          console.log(e.target.value)} 
          filterPoke = {this.filterPoke}
          />
        <br />
        <PokemonCollection pokemons = {this.state.filteredPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
