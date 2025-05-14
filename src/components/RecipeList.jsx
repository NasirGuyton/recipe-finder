import React from 'react';
import { useSelector } from 'react-redux';

const RecipeList = () => {
  const { items, status, error } = useSelector(state => state.recipes);

  if (status === 'loading') return <p className="text-center">Loading...</p>;
  if (status === 'failed') return <p className="text-center text-red-500">{error}</p>;
  if (items.length === 0) return <p className="text-center">No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {items.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
          {recipe.image && <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded mt-2" />}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
