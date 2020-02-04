import React from 'react'

const Search = props => {
  return (
    <div>
      <div className="ui search">
        <div className="ui icon input">
          <input name="search" className="prompt" onChange={(event) => props.onChange(event.target.value)} value={props.searchInput} />
          <i className="search icon" />
        </div>
      </div>
      <div>
        <button onClick={props.clickHandler} >Sort by HP</button>
      </div>
    </div>
  )
}

export default Search
