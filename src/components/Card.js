import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Card({ book, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = (item) => {
    setIsAdded(true);
    addToCart(item);
  }
  
  return (
    <div className="card">
      <img src={book.book_image} className="card-img-top" alt="Game of thrones" />
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
}

export default Card;