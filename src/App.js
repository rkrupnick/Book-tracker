import React, { Component } from "react";
import BookShelves from "./BookShelves";
import * as BooksAPI from "./BooksAPI";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    //shelf: this.props.shelf,
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  handleChange = event => {
    this.setState({ shelf: event.target.value });
    console.log(this);
  };

  render() {
    return (
      <div className="App">
        <BookShelves books={this.state.books} shelf={this.state.shelf} />
      </div>
    );
  }
}

export default App;
