import React, { Component } from "react";

class BookShelves extends Component {
  render() {
    const { books } = this.props;
    const { shelf } = this.props;
    const currentlyReading = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const read = books.filter(book => book.shelf === "read");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");

    return (
      <div className="book-shelves">
        <div id="currentlyReading">
          <h2>Currently Reading</h2>
          <ol>
            {currentlyReading.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks.smallThumbnail
                        })`
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select value={shelf}>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.name}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div id="wantToRead">
          <h2>Want to Read</h2>
          <ol>
            {wantToRead.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks.smallThumbnail
                        })`
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select value={book.shelf}>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.name}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div id="read">
          <h2>Read</h2>
          <ol>
            {read.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks.smallThumbnail
                        })`
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select value={book.shelf}>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.name}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelves;
