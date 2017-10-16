import React, { Component} from 'react';

// When you define a class always have a render method
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="search-bar">
      <input
        value = {this.state.term}
        onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // handleInputChange(eventObject) {
  //   console.log(eventObject.target.value);
  // }
}

export default SearchBar;
