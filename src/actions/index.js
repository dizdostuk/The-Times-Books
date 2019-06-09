import { 
  FETCH_BOOKS_REQUESTED, 
  FETCH_BOOKS_SUCCESS, 
  FETCH_BOOKS_FAILED,
  ADD_TO_CART,
  ADD_TO_LIKED,
  REGISTER_USER,
  LOGOUT_USER
} from "../action-creators";

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

const addToLiked = (book) => {
  return {
    type: ADD_TO_LIKED,
    book: book
  }
};

const registerUser = (newUser) => {
  return {
    type: REGISTER_USER,
    newUser: newUser
  }
};

const logOut = () => {
  return {
    type: LOGOUT_USER,
    user: {},
    isEntered: false
  }
};

export {
  booksRequested,
  booksLoaded,
  booksError,
  addToCart,
  addToLiked,
  registerUser,
  logOut
};