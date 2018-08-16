import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  state = {
    query: ''
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  render() {
    const { books, searchBooks } = this.props;

    const updateQuery = query => {
      this.setState({ query: query.trim() });
      searchBooks(query);
    };

    return (
      <div className="search-page">
        <input
          type="text"
          className="search-bar"
          value={this.state.query}
          onChange={event => updateQuery(event.target.value)}
        />
        <Link to="/">Home</Link>

        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} updateShelf={this.props.updateShelf} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchPage;
