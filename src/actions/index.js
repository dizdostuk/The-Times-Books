import { FETCH_BOOKS_REQUESTED, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILED, ADD_TO_CART } from "../action-creators";

const booksRequested = () => {
  return {
    type: FETCH_BOOKS_REQUESTED
  }
};

const booksLoaded = (newBooks) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    newBooks: newBooks
  }
};

const booksError = (error) => {
  return {
    type: FETCH_BOOKS_FAILED,
    error: error
  }
};

const addToCart = (book) => {
  return {
    type: ADD_TO_CART,
    book: book
  }
};

export {
  booksRequested,
  booksLoaded,
  booksError,
  addToCart
};