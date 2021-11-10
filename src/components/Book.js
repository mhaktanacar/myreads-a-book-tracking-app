import React, { Component } from 'react'

class Book extends Component {
  state = {
    status: this.props.book.shelf
  }

  handleChange = (event) => {
    const st = event.target.value;
    this.setState({ status: st });
    this.props.onChangeShelf(this.props.book, st);
  }

  render() {
    const { status } = this.state
    const { book, onChangeShelf } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128, height: 193, backgroundImage: `url(${book.imageLinks &&
                book.imageLinks.thumbnail})`
            }}>
              <div className="book-shelf-changer">
                <select value={status} onChange={this.handleChange}>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="read">Read</option>
                  <option value="wantToRead">Want To Read</option>
                  <option value="none">None</option>

                </select>
              </div>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
      </li>
    )
  }
}

export default Book