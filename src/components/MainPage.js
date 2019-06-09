import React from 'react';
import { connect } from "react-redux";
import Card from "./Card";



const MainPage = ({ books }) => {

  return (
    <div>
      <div className="hero">
        <h1>The New York Time Books</h1>
      </div>

      <div className="content">
        <div className="container">
          <div className="sort_block">
            <h3>Hardcover Fiction</h3>
          </div>

          <div className="content_books">
            {books[0] ? books[0].map(item => {
              return <Card book={item}/>
            }) : null}
          </div>
        </div>

        <div className="container mt-20">
          <div className="sort_block">
            <h3>Hardcover Non Fiction</h3>
          </div>

          <div className="content_books">
            {books[1] ? books[1].map(item => {
              return <Card book={item} />
            }) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ books }) => {
  return { books };
}
 
export default connect(mapStateToProps)(MainPage);