import {
  FETCH_BOOKS_REQUESTED,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  ADD_TO_CART
} from "../action-creators";

const initialState = {
  books: [],
  user: {},
  error: null,
  loading: false
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BOOKS_REQUESTED:
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.newBooks,
        loading: false,
        error: null
      }
    case FETCH_BOOKS_FAILED:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.error
      }
  }
};

export default rootReducer;