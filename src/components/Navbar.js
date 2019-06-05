import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Navbar = ({ cartBookCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">The Books</a>
        
        <div className="user_nav">
          <div className="user_nav_grid">
            <div className="user_nav-likes"><a href="#"><i className="fa fa-heart" /></a></div>
            <div className="user_nav-bag">
              <Link to="/cart">
                <i className="fa fa-shopping-cart" />
                <span className="cartCount">{cartBookCount.length}</span>
              </Link>
            </div>
            <div className="user_nav-avatar"><img className="avatar" src="https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613__340.jpg" alt=""/></div>
            <div className="user_nav-user-name">User Name</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = ({ itemsInCart }) => {
  return {
    cartBookCount: itemsInCart
  }
};
 
export default connect(
  mapStateToProps,
  null
)(Navbar);