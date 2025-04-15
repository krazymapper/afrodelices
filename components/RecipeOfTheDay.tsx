import { Recipe } from '@/types';
import Link from 'next/link';
import RecipeImage from '@/app/components/RecipeImage';

interface RecipeOfTheDayProps {
  recipes: Recipe[];
}

export default function RecipeOfTheDay({ recipes }: RecipeOfTheDayProps) {
  // For now, just pick the first recipe as recipe of the day
  const recipe = recipes[0];

  if (!recipe) return null;

  return (
    <section className="relative">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Recette du Jour</h2>
              <h3 className="text-2xl font-semibold text-white mb-4">{recipe.name}</h3>
              <p className="text-orange-100 mb-6">{recipe.description}</p>
              <Link
                href={`/recipe/${recipe.id}`}
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Voir la recette
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <RecipeImage name={recipe.name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 