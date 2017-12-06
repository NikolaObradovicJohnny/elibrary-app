import React, { Component } from 'react';

class BookItemList extends Component {
  render() {
    var title = this.props.title;
    if (title.length > 25) {
      title = title.substring(0,23) + '...'
    }

    var description = this.props.description;
    if (description.length > 65) {
      description = description.substring(0,62) + '...'
    }
    return (
      <a href={'/books/'+this.props.fileLocation}>
      	<div className="column senka">
          <h3>{title}</h3>
          <i>by {this.props.author}</i><br/><br/>
          	<img className='listItemImg' src={'images/books/'+this.props.image} alt={this.props.title} />
          <p>
          	{description}
          </p>
        </div>
      </a>
    );
  }
}

export default BookItemList;