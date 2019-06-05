import React from 'react';
import { connect } from "react-redux";
import Card from "./Card";
import { addToCart } from '../actions';


const MainPage = ({ books, addToCart }) => {

  const handleAddToCart = (obj) => {
    addToCart(obj)
  };

  return (
    <div>
      <div className="hero">
        <h1>The New York Time Books</h1>
      </div>

      <div className="content">
        <div className="container">
          <div className="sort_block">
            <h3>All</h3>
            <span>Sort by:</span>
            <select name="sort" id="sortId">
              <option value="All">All</option>
              <option value="Best sellers">Best Sellers</option>
              <option value="By the book">By the book</option>
              <option value="Childrens">Childrens</option>
            </select>
          </div>

          <div className="content_books">
            {books ? books.map(item => {
              return <Card
                book={item}
                addToCart={handleAddToCart} />
            }) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (book) => dispatch(addToCart(book))
  }
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);