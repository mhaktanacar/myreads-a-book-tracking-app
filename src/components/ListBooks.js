import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  render() {
    const { books, onChangeShelf } = this.props
    const currentlyReading = books.filter((b) => b.shelf == 'currentlyReading')
    const read = books.filter((b) => b.shelf == 'read')
    const wantToRead = books.filter((b) => b.shelf == 'wantToRead')

    return (
      <div className="list-books">
        <div className="list-books-title">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <ol className="books-grid">
              {currentlyReading.map(book => (
                <Book key={book.id} book={book}
                  onChangeShelf={onChangeShelf}
                />
              ))}
            </ol>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <ol className="books-grid">
              {wantToRead.map(book => (
                <Book key={book.id} book={book}
                  onChangeShelf={onChangeShelf}
                />
              ))}
            </ol>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <ol className="books-grid">
              {read.map(book => (
                <Book key={book.id} book={book}
                  onChangeShelf={onChangeShelf}
                />
              ))}
            </ol>
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'
          ><button>Search Book</button></Link>
        </div>
      </div>
    )
  }
}

export default ListBooks