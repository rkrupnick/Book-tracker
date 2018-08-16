import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
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
          {books ? (
            books.map(book => (
              <li key={book.id}>
                <Book book={book} updateShelf={this.props.updateShelf} />
              </li>
            ))
          ) : (
            <p>Search for books!</p>
          )}
        </ul>
      </div>
    );
  }
}

export default SearchPage;
