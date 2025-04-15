'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mockRecipes } from '../../data/mockRecipes';

export default function RecipePage() {
  const params = useParams();
  const recipe = mockRecipes.find(r => r.id === params.id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe not found</h1>
          <Link href="/" className="text-orange-600 hover:text-orange-700">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link href="/" className="text-orange-600 hover:text-orange-700 mb-6 inline-block">
        ← Back to recipes
      </Link>

      <div className="space-y-8">
        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
          {recipe.imageUrl ? (
            <Image
              src={recipe.imageUrl}
              alt={recipe.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{recipe.name}</h1>
          
          <div className="flex items-center gap-4 text-gray-600">
            <span>{recipe.countryOfOrigin}</span>
            <span>•</span>
            <span>{recipe.geographicalArea}</span>
            <span>•</span>
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">
              {recipe.difficulty}
            </span>
          </div>

          <p className="text-gray-600 text-lg">{recipe.description}</p>

          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="text-center">
              <p className="text-gray-500">Prep Time</p>
              <p className="text-xl font-semibold">{recipe.prepTime} mins</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500">Cook Time</p>
              <p className="text-xl font-semibold">{recipe.cookTime} mins</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500">Servings</p>
              <p className="text-xl font-semibold">{recipe.servings}</p>
            </div>
          </div>
        </div>

        {recipe.therapeuticProperties && recipe.therapeuticProperties.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Therapeutic Properties</h2>
            {recipe.therapeuticProperties.map((prop, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-2">{prop.condition}</h3>
                <p className="text-gray-600 mb-4">{prop.benefits}</p>
                <div className="space-y-2">
                  <p className="font-medium">Suitable for:</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {prop.suitableFor.map((person, idx) => (
                      <li key={idx}>{person}</li>
                    ))}
                  </ul>
                  {prop.precautions && (
                    <>
                      <p className="font-medium mt-4">Precautions:</p>
                      <ul className="list-disc list-inside text-gray-600">
                        {prop.precautions.map((precaution, idx) => (
                          <li key={idx}>{precaution}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800">
                  {index + 1}
                </span>
                <span>
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Instructions</h2>
          <div className="space-y-4">
            {recipe.cookingSteps.map((step) => (
              <div key={step.stepNumber} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800">
                  {step.stepNumber}
                </div>
                <div>
                  <p className="text-gray-600">{step.instruction}</p>
                  {step.duration && (
                    <p className="text-sm text-gray-500 mt-1">
                      Duration: {step.duration} minutes
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 