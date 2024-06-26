import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Buscar..."
        />
      </div>
    );
  }
}

export default SearchBar;