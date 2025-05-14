import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../features/recipes/recipeSlice';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(fetchRecipes(query));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
      <input
        className="border p-2 rounded w-full"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
