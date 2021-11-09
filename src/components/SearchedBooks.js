import React, { Component } from 'react'
import Book from './Book'

class SearchedBooks extends Component {
  render() {
    const { searchedBooks, result, onChangeShelf } = this.props

    const showSearchedBooks = () => {
      try {
        return <ol className="books-grid">
          {searchedBooks.map(book => (
            <Book key={book.id} book={book}
              onChangeShelf={onChangeShelf}
            />
          ))}
        </ol>;
      } catch (error) {
        return <a>No Result</a>;
      }
    }

    return (
      <div>
        <div className="search-books-results">
          {showSearchedBooks()}
        </div>
      </div>
    )
  }
}

export default SearchedBooks