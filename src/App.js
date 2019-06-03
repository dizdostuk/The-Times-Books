import React, { useEffect, useState } from 'react';
import Card from "./components/Card";
import { config } from "./book-server/book-server"
import "./App.css";



function App() {
  
  const[books, setBooks] = useState([]);
  let newArr = [];
  
  useEffect(() => {
    fetch(config.url+'?api-key='+config.apiKey)
      .then(resps => resps.json())
      .then(json => {
        return setBooks(json.results.books);
      })
      .catch(err => console.log(err));
    },[]);
    
    console.log(books)

  return (
    <div className="wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">The Books</a>
          
          <div className="user_nav">
            <div className="user_nav_grid">
              <div className="user_nav-likes"><a href="#"><i className="fa fa-heart" /></a></div>
              <div className="user_nav-bag"><a href="#"><i className="fa fa-shopping-cart" /></a></div>
              <div className="user_nav-avatar"><img className="avatar" src="https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613__340.jpg" alt=""/></div>
              <div className="user_nav-user-name">User Name</div>
            </div>
          </div>
        </div>
      </nav>

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
                key={item.title}
                title={item.title}
                description={item.description}
                bookImg={item.book_image}
                author={item.contributor} />
            }) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;