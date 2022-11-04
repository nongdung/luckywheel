import React from 'react';

export const AppContext = React.createContext({
  user: null,
  setUser: () => {},
  currentPage: 'home',
  setCurrentPage: () => {},
});
