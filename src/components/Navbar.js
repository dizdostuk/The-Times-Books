import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import TooltipBook from "./TooltipBook";
import { logOut } from "../actions";

const Navbar = ({ cartBookCount, isEntered, user, likedBooks, exit }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">The Books</Link>
        {isEntered ? (<div className="user_nav">
          <div className="user_nav_grid">
            <div className="user_nav-likes">
              <Link to="/likedpage" className="user_nav-likes"><i className="fa fa-heart" /></Link>
              <div className="tooltip_content">
                <div className="tooltip_books">
                  {likedBooks.length > 0 ? likedBooks.map(likedBook => (
                    <TooltipBook 
                      book_img={likedBook.book_image}
                      title={likedBook.title} />
                  )) : <div className="tooltip_empty">Empty</div>}
                </div>
              </div>
            </div>
            <div className="user_nav-bag">
              <Link to="/cart">
                <i className="fa fa-shopping-cart" />
                <span className="cartCount">{cartBookCount.length}</span>
              </Link>
            </div>
            <div className="user_nav-avatar"><img className="avatar" src="https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613__340.jpg" alt=""/></div>
            <div className="user_nav-user-name">
              {`${user.firstName} ${user.lastName}`}
              {" | "}
              <Link to="/" onClick={() => exit()}>Logout</Link>
            </div>
            
          </div>
        </div>) :
        (<div className="sign_block">
        <Link to="/login">Login</Link>
        
        </div>)}
      </div>
    </nav>
  );
}

const mapStateToProps = ({ itemsInCart, user, isEntered, likedBooks }) => {
  return {
    cartBookCount: itemsInCart,
    user,
    isEntered,
    likedBooks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    exit: () => dispatch(logOut())
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);