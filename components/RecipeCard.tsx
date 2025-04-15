import { Recipe } from '@/types';
import Link from 'next/link';
import RecipeImage from '@/app/components/RecipeImage';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <RecipeImage name={recipe.name} />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{recipe.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {recipe.therapeuticProperties?.map((property) => (
              <span
                key={property}
                className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
              >
                {property}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
} 