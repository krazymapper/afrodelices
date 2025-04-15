'use client';

import { useState, useMemo } from 'react';
import { GeographicalArea, MealType, Recipe } from './types';
import RecipeCard from './components/RecipeCard';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import { mockRecipes } from './data/mockRecipes';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<GeographicalArea | ''>('');
  const [selectedMealType, setSelectedMealType] = useState<MealType | ''>('');

  const geographicalAreas: GeographicalArea[] = [
    'West Africa',
    'East Africa',
    'North Africa',
    'South Africa',
    'Central Africa',
    'Madagascar'
  ];

  const mealTypes: MealType[] = ['Lunch', 'Dinner'];

  const filteredRecipes = useMemo(() => {
    return mockRecipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesArea = !selectedArea || recipe.geographicalArea === selectedArea;
      const matchesMealType = !selectedMealType || recipe.mealType.includes(selectedMealType);
      
      return matchesSearch && matchesArea && matchesMealType;
    });
  }, [searchQuery, selectedArea, selectedMealType]);

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Discover African & Malagasy Cuisine
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore over 300 authentic recipes with detailed instructions and therapeutic properties
        </p>
      </section>

      <RecipeOfTheDay recipes={mockRecipes} />

      <section className="card space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value as GeographicalArea | '')}
            >
              <option value="">All Regions</option>
              {geographicalAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={selectedMealType}
              onChange={(e) => setSelectedMealType(e.target.value as MealType | '')}
            >
              <option value="">All Meal Types</option>
              {mealTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <h3 className="text-xl font-semibold text-gray-900">No recipes found</h3>
            <p className="text-gray-600 mt-2">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
