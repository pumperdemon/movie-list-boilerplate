import React from 'react';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxText: ''
    }
    this.textIn = this.textIn.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  textIn() {
    this.setState({
      boxText: event.target.value
    })
  }

  clickHandler(event) {
    event.preventDefault();
    this.props.search(this.state.boxText)
  }


  render() {
    return(
      <form>
        <label>Search Your Collection!  </label>
        <input type="text" onChange={this.textIn} />
        <button onClick={this.clickHandler}>Search</button>
      </form>
    )
  }
}

export default SearchList;