import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="App bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <h1>Recipe Explorer</h1>
          <p className="mt-2 text-blue-100 font-light text-lg">Find delicious recipes for any ingredient</p>
        </div>
      </header>
      
      <main className="section">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2>Search Recipes</h2>
          <SearchForm />
        </div>
        
        <RecipeList />
      </main>
      
      <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>Recipe Explorer &copy; {new Date().getFullYear()}</p>
          <p className="text-sm mt-2 text-gray-400">Powered by Spoonacular API</p>
        </div>
      </footer>
    </div>
  );
}

export default App;