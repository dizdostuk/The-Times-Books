import React from 'react';
import { connect } from "react-redux";

function LikedPage({ likedBooks }) {
  return (
    <div className="wrapper">
      <div className="hero">
        <h1>Liked page</h1>
      </div>

      <div className="content">
        <div className="container">
          <div className="content_cart_books">
            {likedBooks ? likedBooks.map(book => {
              return <div className="cart_book_item">
                <div className="cart_book_item_img">
                  <img src={book.book_image} alt={book.title}/>
                </div>
                <div className="cart_book_item_info">
                  <h3>Title: {book.title}</h3>
                  <p>Author: {book.author}</p>
                  <p>Description: {book.description}</p>
                </div>
                <input type="number" defaultValue="1"/>
              </div>
            }) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ likedBooks }) => {
  return { likedBooks };
}

export default connect(
  mapStateToProps
)(LikedPage);