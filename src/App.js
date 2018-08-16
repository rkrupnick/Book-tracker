import React, { Component } from "react";
import BookShelves from "./BookShelves";
import * as BooksAPI from "./BooksAPI";
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
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getBooks();
    });
  };

  render() {
    return (
      <div className="App">
        <BookShelves books={this.state.books} updateShelf={this.updateShelf} />
      </div>
    );
  }
}

export default App;
