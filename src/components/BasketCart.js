import React from 'react';
import { connect } from "react-redux";


const BasketCart = ({ itemsInCart }) => {
  return (
    <div className="wrapper">

      <div className="hero">
        <h1>Cart in the page</h1>
      </div>

      <div className="content">
        <div className="container">
          <div className="content_cart_books">
            {itemsInCart ? itemsInCart.map(book => {
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
          {itemsInCart.length ? <button className="btn btn-success btn_in_cart">Buy</button> : null}

        </div>
      </div>

    </div>
  )
};

const mapStateToProps = ({ itemsInCart }) => {
  return { itemsInCart };
};
 
export default connect(
  mapStateToProps,
  null
)(BasketCart);