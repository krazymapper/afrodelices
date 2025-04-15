import { Recipe } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface RecipeOfTheDayProps {
  recipes: Recipe[];
}

export default function RecipeOfTheDay({ recipes }: RecipeOfTheDayProps) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    // Use the current date as a seed for consistent daily selection
    const today = new Date().toDateString();
    const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = seed % recipes.length;
    setRecipe(recipes[index]);
  }, [recipes]);

  if (!recipe) return null;

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg overflow-hidden shadow-xl">
      <div className="p-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <h2 className="text-2xl font-bold">Recipe of the Day</h2>
        </div>
        
        <Link href={`/recipe/${recipe.id}`}>
          <div className="group cursor-pointer">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              {recipe.imageUrl ? (
                <Image
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-orange-400 flex items-center justify-center">
                  <span className="text-white">No image available</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white mb-2">{recipe.name}</h3>
                <p className="text-white/90 text-sm">
                  {recipe.countryOfOrigin} • {recipe.geographicalArea}
                </p>
              </div>
            </div>

            <p className="text-white/90 line-clamp-2 mb-4 group-hover:text-white transition-colors">
              {recipe.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                {recipe.difficulty}
              </span>
              {recipe.mealType.map((type) => (
                <span
                  key={type}
                  className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                >
                  {type}
                </span>
              ))}
            </div>

            <div className="mt-4 inline-flex items-center text-white group-hover:translate-x-2 transition-transform">
              View Recipe
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
} 