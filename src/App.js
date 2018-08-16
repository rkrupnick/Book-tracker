import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BookShelves from './BookShelves';
import SearchPage from './SearchPage';
import { IconContext } from 'react-icons';
import { FaPlusCircle } from 'react-icons/fa';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  state = {
    books: [],
    bookResults: []
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

  searchBooks = query => {
    BooksAPI.search(query).then(bookResults => {
      this.setState({ bookResults });
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
                <Link to="/search" className="search-link">
                  <IconContext.Provider value={{ color: 'blue', size: '2em' }}>
                    <FaPlusCircle /> Add More Books!
                  </IconContext.Provider>
                </Link>
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
              <SearchPage
                books={this.state.bookResults}
                searchBooks={this.searchBooks}
                updateShelf={this.updateShelf}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
