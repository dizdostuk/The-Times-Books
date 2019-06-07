import { createSelector } from 'reselect';

const getVisibilityFilter = state => state.visibilityFilter;
const getBooks = state => state.books;

export const getVisibleBooks = createSelector(
  [getVisibilityFilter, getBooks],
  (visibilityFilter, books) => {
    switch(visibilityFilter) {
      case "SHOW_ALL":
        return books;
      case "SHOW_COMPLETED":
        return books.filter(book => book.completed);
      case "SHOW_ACTIVE":
        return books.filter(b => !b.completed);
    }
  }
)