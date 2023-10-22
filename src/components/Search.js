// Search.js
import React, { useState } from 'react';

function Search({ onSearch, showFavorites, handleFavourite }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="filter">
      <div className="contain">
        
        <img src='https://www.shareicon.net/download/2016/10/05/839352_hat_512x512.png' alt='' />
        <div className='app-name'>
        <h3>Recipe Finder</h3>
        </div>
        <div className="top-row">
          <input type='text' name='search' value={query} onChange={e => setQuery(e.target.value)} />
        </div>
        <div className="bottom-row">
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="bottom-fav">
          <button onClick={handleFavourite}>{showFavorites ? 'Hide Favorites' : 'Show Favourites'}</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
