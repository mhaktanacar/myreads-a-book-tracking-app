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
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }
  
  handleSearch = (event) => {
    const query = event.target.value;
    this.setState({ query: query });
  }

  componentDidUpdate(){
    BooksAPI.search(this.state.query).then((searchedBooks) => {
      this.setState({ searchedBooks })
    })
  }

  changeShelf = (book, status) => {
    BooksAPI.update(book, status).then(books => {
      if (book.shelf === 'none' && status !== 'none') {
        this.setState(state => {
          const newBooks = state.books.concat(book);
          return { searchedBooks: newBooks }
        })
      }
      const updatedBooks = this.state.searchedBooks.map(shelfedBook => {
        if (shelfedBook.id === book.id) {
          shelfedBook.shelf = status
        }
        return shelfedBook;
      });
      this.setState({
        searchedBooks: updatedBooks,
      });
    });
  }

  render() {
    const { query, searchedBooks, result, onChangeShelf } = this.state

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
            <SearchedBooks searchedBooks={searchedBooks}
              onChangeShelf={this.changeShelf}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default BookSearch