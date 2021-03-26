import React from 'react';
import App from './App.jsx';

class MovieAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.textIn = this.textIn.bind(this)
    this.cickhandler = this.clickHandler.bind(this)
  }

  textIn() {
    this.setState({
      title: event.target.value
    })
  }

  clickHandler(event) {
    event.preventDefault()
    this.props.addFilm(this.state)
  }

  render() {
    return(
      <form>
        <label>Add Your Latest!  </label>
        <input type='text' onChange={this.textIn}></input>
        <button onClick={this.clickHandler}>Add</button>
      </form>
    )
  }
}

export default MovieAdd;