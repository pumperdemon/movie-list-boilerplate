import React from 'react';
import MovieList from './movielist.jsx'
import SearchList from './searchlist.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesOnHand: [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}
      ]

    }
    this.search = this.search.bind(this);
  }

  search(text) {
    let display = this.state.moviesOnHand.slice();
    let filtered = display.filter(item => item.title.includes(text))
    if (filtered.length) {
      this.setState({moviesOnHand: filtered})
    } else {
      this.setState({moviesOnHand: [{title: 'No Match'}]})
    }

  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <SearchList search={this.search} />
        <MovieList videos={this.state.moviesOnHand} search={this.search}/>
      </div>
    )
  }
};


export default App;