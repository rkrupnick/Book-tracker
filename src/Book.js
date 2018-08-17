import React, { Component } from 'react';

class Book extends Component {
  state = {
    shelf: this.props.book.shelf,
    successfulMove: false
  };

  handleChange = (event, book) => {
    this.setState({ shelf: event.target.value });
    this.props.updateShelf(book, event.target.value);
    this.setState({ successfulMove: true });
  };

  render() {
    const { book } = this.props;
    let bookImage;
    if (book.imageLinks) {
      bookImage = book.imageLinks.smallThumbnail;
    } else {
      bookImage = 'https://via.placeholder.com/128x193';
    }

    return (
      <div className="book">
        <div className="book-top">
          {this.state.successfulMove && (
            <div className="successful-move">This book has been moved!</div>
          )}
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookImage})`
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

        <div className="book-title">{book.title}</div>
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
