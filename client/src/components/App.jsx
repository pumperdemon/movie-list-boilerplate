import React from 'react';
import MovieList from './movielist.jsx'
import SearchList from './searchlist.jsx'
import MovieAdd from './movieadd.jsx'

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
    this.addFilm = this.addFilm.bind(this);
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

  addFilm(text) {
    let list = this.state.moviesOnHand.slice();
    list.push(text)
    this.setState({
      moviesOnHand: list
  })
  }


  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <MovieAdd addFilm={this.addFilm} />
        <SearchList search={this.search} />
        <MovieList videos={this.state.moviesOnHand} search={this.search}/>
      </div>
    )
  }
};


export default App;