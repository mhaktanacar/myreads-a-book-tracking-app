import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchedBooks extends Component {
  state = {
    searchedBooks: [],
  }

  componentDidUpdate(prevProps) {
    if (this.props.query.length > 0 && prevProps.query !== this.props.query ) {
      BooksAPI.search(this.props.query).then((searchedBooks) => {
        this.setState({ searchedBooks })
      })
    } 
  }

  render() {
    const { query, onChangeShelf, books } = this.props
    const { searchedBooks } = this.state

    const showSearchedBooks = () => {
      try {
        searchedBooks.forEach((searchedBook) => {
          books.forEach((book) => {
            if (book.id === searchedBook.id) {
              searchedBook.shelf = book.shelf;
            }
          });
          if (!searchedBook.shelf) {
            searchedBook.shelf = 'none';
          }
        })
        if (query.length !== 0) {
          return <ol className="books-grid">
            {searchedBooks.map(book => (
              <Book key={book.id} book={book}
                onChangeShelf={onChangeShelf}
              />
            ))}
          </ol>;
        }
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