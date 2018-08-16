import React, { Component } from "react";

class SearchPage extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="search-page">
        <input type="text" />
      </div>
    );
  }
}

export default SearchPage;
