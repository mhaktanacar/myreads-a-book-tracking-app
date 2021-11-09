import * as BooksAPI from './BooksAPI'
import React, { Component } from 'react'
import LandingPage from './components/LandingPage'
import './App.css'
import BookSearch from './components/BookSearch'
import { Route } from 'react-router-dom'

class App extends React.Component {
  state = {
    books: [],
  }

  changeShelf = (book, status) => {
    BooksAPI.update(book, status).then(books => {
      if (book.shelf === 'none' && status !== 'none') {
        this.setState(state => {
          const newBooks = state.books.concat(book);
          return { books: newBooks }
        })
      }
      const updatedBooks = this.state.books.map(shelfedBook => {
        if (shelfedBook.id === book.id) {
          shelfedBook.shelf = status
        }
        return shelfedBook;
      });
      this.setState({
        books: updatedBooks,
      });
    });
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <LandingPage
            books={this.state.books}
            onChangeShelf={this.changeShelf}
          />
        )} />
        <Route path='/search' render={() => (
          <BookSearch
            onChangeShelf={this.changeShelf}
          />
        )} />
      </div>
    )
  }
}

export default App
