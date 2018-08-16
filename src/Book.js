import React, { Component } from 'react';

class Book extends Component {
  state = {
    shelf: this.props.book.shelf
  };

  handleChange = (event, book) => {
    this.setState({ shelf: event.target.value });
    this.props.updateShelf(book, event.target.value);
  };

  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              className="book-shelf-select"
              value={this.state.shelf ? this.state.shelf : 'none'}
              onChange={event => this.handleChange(event, book)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.name}</div>
        <div className="book-authors">
          {book.authors &&
            book.authors.map(author => (
              <p key={author} className="author">
                {author}
              </p>
            ))}
        </div>
      </div>
    );
  }
}

export default Book;
