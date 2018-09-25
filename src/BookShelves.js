import React, { Component } from "react";
import Book from "./Book";

class BookShelves extends Component {
  render() {
    const { books } = this.props;

    const currentlyReading = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const read = books.filter(book => book.shelf === "read");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");

    return (
      <div className="book-shelves">
        <div id="currentlyReading" className="shelf">
          <h2>Currently Reading</h2>
          <ol>
            {currentlyReading.map(book => (
              <li key={book.id}>
                <Book book={book} updateShelf={this.props.updateShelf} />
              </li>
            ))}
          </ol>
        </div>

        <div id="wantToRead" className="shelf">
          <h2>Want to Read</h2>
          <ol>
            {wantToRead.map(book => (
              <li key={book.id}>
                <Book book={book} updateShelf={this.props.updateShelf}/>
              </li>
            ))}
          </ol>
        </div>

        <div id="read" className="shelf">
          <h2>Read</h2>
          <ol>
            {read.map(book => (
              <li key={book.id}>
                <Book book={book} updateShelf={this.props.updateShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelves;
