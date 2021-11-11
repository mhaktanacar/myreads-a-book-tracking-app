import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import SearchedBooks from './SearchedBooks'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


class BookSearch extends Component {
  state = {
    query: '',
  }

  handleSearch = (event) => {
    const query = event.target.value;
    this.setState({ query: query });
  }

  render() {
    const { query, searchedBooks } = this.state
    const { books, onChangeShelf } = this.props

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <div>
              <Link
                to='/'>Back to Shelf</Link>
            </div>
            <div className="search-books-input-wrapper">
              <input
                type='text'
                placeholder='Search by title or author'
                value={query}
                onChange={this.handleSearch}
              />
            </div>
          </div>
          <div>
            <SearchedBooks query={query}
              books={books}
              onChangeShelf={onChangeShelf}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default BookSearch