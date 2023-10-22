import React from 'react';

function RecipeList({ receipe, favoritedItems, onItemClick, onFavorite }) {
  return (
    <div className='recipe'>
      {receipe.length > 0 ? <h1>Search results:</h1> : <h1>Search The Recipe You Want !</h1>}
      <div className="data-grid">
        {receipe.map((recipe) => (
          <div key={recipe.recipe.label} className="grid-item" onClick={() => onItemClick(recipe)}>
            <img src={recipe.recipe.image} alt="" />
            <p>{recipe.recipe.label}</p>
            <button
              className={`heart-button ${favoritedItems.some((item) => item.uri === recipe.recipe.uri) ? 'active' : ''}`}
              onClick={(e) => onFavorite(e, recipe.recipe)}
            >
              {favoritedItems.some((item) => item.uri === recipe.recipe.uri) ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default RecipeList;
