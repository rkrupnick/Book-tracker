import React, { Component } from "react";
import { Route } from "react-router-dom";
import BookShelves from "./BookShelves";
import SearchPage from "./SearchPage";
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
        <Route
          exact
          path="/"
          render={() => (
            <div className="my-books">
              <nav>
                <h1>Book Shelves</h1>
                <a href="/search" className="search-link">
                  Search
                </a>
              </nav>
              <BookShelves
                books={this.state.books}
                updateShelf={this.updateShelf}
              />
            </div>
          )}
        />

        <Route
          exact
          path="/search"
          render={() => (
            <div className="search-page">
              <SearchPage books={this.state.books} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
