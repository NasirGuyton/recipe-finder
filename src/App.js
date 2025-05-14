import React from 'react';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-6">Recipe Finder</h1>
      <SearchForm />
      <RecipeList />
    </div>
  );
}

export default App;
