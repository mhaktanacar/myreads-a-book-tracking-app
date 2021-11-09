import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks';

class LandingPage extends Component {
  render() {
    const { books, onChangeShelf } = this.props
    return (
      <div className="list-books">
        <ListBooks books={books}
          onChangeShelf={onChangeShelf}
        />
      </div>
    )
  }
}

export default LandingPage