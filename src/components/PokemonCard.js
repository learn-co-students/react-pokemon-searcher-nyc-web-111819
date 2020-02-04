import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    display: false
  }
  clicked = () => {
    this.setState({
      display: !this.state.display
    })
  }
  render() {
    return (
      <Card>
        <div onClick = {this.clicked}>
          <div className="image">
            <img alt="oh no!" src={this.state.display === false ? this.props.front : this.props.back}/>
          </div>
          <div className="content">
    <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
    {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
