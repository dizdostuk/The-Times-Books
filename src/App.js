import React, { useEffect, useState } from 'react';
import { Switch, Link, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";
import { config } from "./book-server/book-server"
import {
  booksRequested,
  booksLoaded,
  booksError
} from "./actions";
import "./App.css";
import MainPage from './components/MainPage';
import BasketCart from './components/BasketCart';
import Login from "./components/Login";
import Registration from "./components/Registration";



function App({
  requestToApi,
  loadToStore,
  loadError
}) {
  
  useEffect(() => {
    requestToApi();
    config.urls.map(url => {
      fetch(url+'?api-key='+config.apiKey)
        .then(resps => resps.json())
        .then(json => {
          return loadToStore(json.results.books);
        })
        .catch(err => loadError(err));

    })
    },[]);

  return (
    <div className="wrapper">
      <Navbar />

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Registration} />
        <Route exact path="/" component={MainPage} />
        <Route path="/cart" component={BasketCart} />

      </Switch>
      
    </div>
  );
}

const mapDispathToProps = (dispatch) => {
  return {
    requestToApi: () => dispatch(booksRequested()),
    loadToStore: (books) => dispatch(booksLoaded(books)),
    loadError: (err) => dispatch(booksError(err)),
  }
};

export default connect(
  null,
  mapDispathToProps
)(App);