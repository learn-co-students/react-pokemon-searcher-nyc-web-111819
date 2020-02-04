import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
state = {
  back: false

}

  render() {

    
    return (
      <Card>
        <div onClick = {()=> {this.setState({back: !this.state.back})}} >

          <div className="image">
            <img src = { this.state.back ? this.props.backUrl : this.props.frontUrl} alt="oh no!"  />

          </div>
          <div className="content">
            <div className="header"> {this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hpValue}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
