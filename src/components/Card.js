import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, addToLiked } from '../actions';


function Card({ book, addToCart, addToLiked, likedBooks }) {
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = (item) => {
    setIsAdded(true);
    addToCart(item);
  };

  const handleAddToLiked = (item) => {
    let likedBooksCount = 0;
    likedBooks.map(likedBook => {
      if(likedBook.title == item.title) {
        likedBooksCount++;
      }
    });
    if(likedBooksCount === 0)
      addToLiked(item);
  }

  return (
    <div className="card">
      <img src={book.book_image} className="card-img-top" alt="Game of thrones" />
      <span className="like_btn"><i className="fa fa-heart" onClick={() => handleAddToLiked(book)}></i></span>
      <div className="card-body">
        <div className="book-info">
          <h5 className="card-title">{book.title}</h5>
          <a href="#" className="card-author">{book.author}</a>
          <p className="card-description">{book.description}</p>
        </div>
        <div className="book-buy">
          {isAdded ?
            (<Link to="/cart" className="btn btn-info">Go to cart</Link>)
            :
            (<button className="btn btn-success" onClick={() => handleAddToCart(book)}>Buy</button>) }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ likedBooks }) => {
  return { likedBooks }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (book) => dispatch(addToCart(book)),
    addToLiked: (book) => dispatch(addToLiked(book))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);