import React, { Component } from 'react';
import Book from './Book';
import escapeRegExp from 'escape-string-regexp';
import { IconContext } from 'react-icons';
import { FaArrowLeft } from 'react-icons/fa';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
  state = {
    query: '',
    books: []
  };

  searchBooks = query => {
    BooksAPI.search(query).then(books => {
      this.setState({ books });
    });
  };

  clearQuery = () => {
    this.setState({
      query: '',
      books: []
    });
  };

  render() {
    const books = this.state.books;


    const updateQuery = query => {
      if (query) {
        query = escapeRegExp(query);
        this.setState({ query });
        this.searchBooks(query);
      } else {
        this.clearQuery();
      }
    };

    return (
      <div className="search-page">
        <input
          type="text"
          placeholder="Search here"
          className="search-bar"
          value={this.state.query}
          onChange={event => updateQuery(event.target.value)}
        />
        <Link to="/">
          <IconContext.Provider value={{ color: '#48f', size: '2em' }}>
            <FaArrowLeft className="left-arrow" />
          </IconContext.Provider>
        </Link>

        <ol>
          {books.length > 0 &&
            books.map(book => (
              <li key={book.id}>
                <Book book={book} updateShelf={this.props.updateShelf} />
              </li>
            ))}

          {books.length < 1 && !this.state.query && <p>Search to add books!</p>}
          {books.length < 1 &&
            this.state.query && <p>No books match your search, try again!</p>}
        </ol>
      </div>
    );
  }
}

export default SearchPage;
