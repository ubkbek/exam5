import { createContext } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState();

  return <SearchContext.Provider value={{ searchValue, setSearchValue }}>{children}</SearchContext.Provider>;
};

SearchProvider.propTypes = {
    children:PropTypes.object.isRequired
}
