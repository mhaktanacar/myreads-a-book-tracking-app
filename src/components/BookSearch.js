import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import SearchedBooks from './SearchedBooks'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


class BookSearch extends Component {
  state = {
    query: '',
    searchedBooks: [],
    result: false,
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  handleChange = (event) => {
    const query = event.target.value;
    this.setState({ query: query });
  }

  handleSearch = () => {
    BooksAPI.search(this.state.query).then((searchedBooks) => {
      this.setState({ searchedBooks })
    })
    if (this.state.searchedBooks !== undefined) {
      if (this.state.searchedBooks.length > 0) {
        this.setState({ result: true });
      }
    }
    else {
      this.setState({ result: false });
    }
  }


  render() {
    const { query, searchedBooks, result } = this.state

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
                onChange={this.handleChange}
              />
            </div>
            <button onClick={this.handleSearch}>Search </button>
          </div>
          <div>
            <SearchedBooks searchedBooks={searchedBooks} result={result} />
          </div>
        </div>
      </div>
    )
  }
}

export default BookSearch