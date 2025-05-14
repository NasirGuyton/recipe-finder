import React from 'react';
import { motion } from 'framer-motion';

export default function RecipeCard({ recipe }) {
  const cookingTime = Math.floor(Math.random() * 30) + 15;
  const rating = (Math.random() * 2 + 3).toFixed(1);
  const calories = Math.floor(Math.random() * 600) + 100;
  
  const extractTag = (title) => {
    const cuisines = ['Italian', 'Mexican', 'Asian', 'Indian', 'Mediterranean'];
    const types = ['Soup', 'Salad', 'Breakfast', 'Dinner', 'Dessert', 'Appetizer'];
    
    for (const cuisine of cuisines) {
      if (title.includes(cuisine)) return cuisine;
    }
    
    for (const type of types) {
      if (title.includes(type)) return type;
    }
    
    return 'Main Course';
  };
  
  const tag = extractTag(recipe.title);
  
  return (
    <motion.div
      className="card"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className="badge bg-yellow-100 text-yellow-800">
            ⭐ {rating}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-800 line-clamp-2 flex-1">{recipe.title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="badge bg-blue-100 text-blue-800">
            ⏱️ {cookingTime} min
          </span>
          <span className="badge bg-green-100 text-green-800">
            🔥 {calories} cal
          </span>
          <span className="badge bg-purple-100 text-purple-800">
            {tag}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <button className="btn-primary text-sm w-full">
            View Recipe
          </button>
        </div>
      </div>
    </motion.div>
  );
}