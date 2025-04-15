import { Recipe } from '../types';

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Jollof Rice',
    description: 'A popular West African rice dish made with tomatoes, peppers, and aromatic spices.',
    mealType: ['Lunch', 'Dinner'],
    countryOfOrigin: 'Nigeria',
    geographicalArea: 'West Africa',
    therapeuticProperties: [
      {
        condition: 'Digestive Health',
        benefits: 'Rich in fiber and promotes healthy digestion',
        suitableFor: ['General Population'],
        precautions: ['Spice-sensitive individuals']
      }
    ],
    ingredients: [
      { name: 'Long grain rice', amount: 500, unit: 'g' },
      { name: 'Tomatoes', amount: 4, unit: 'large' },
      { name: 'Red bell peppers', amount: 2, unit: 'medium' },
      { name: 'Onions', amount: 2, unit: 'large' }
    ],
    cookingSteps: [
      { stepNumber: 1, instruction: 'Blend tomatoes, peppers, and onions', duration: 10 },
      { stepNumber: 2, instruction: 'Cook down the tomato mixture', duration: 15 },
      { stepNumber: 3, instruction: 'Add rice and seasonings', duration: 30 }
    ],
    prepTime: 20,
    cookTime: 45,
    servings: 6,
    imageUrl: '/images/jollof-rice.jpg',
    tags: ['Rice', 'Spicy', 'Party Food'],
    difficulty: 'Medium'
  },
  {
    id: '2',
    name: 'Ravitoto',
    description: 'Traditional Malagasy dish made with pounded cassava leaves and pork.',
    mealType: ['Lunch', 'Dinner'],
    countryOfOrigin: 'Madagascar',
    geographicalArea: 'Madagascar',
    therapeuticProperties: [
      {
        condition: 'Iron Deficiency',
        benefits: 'High in iron and other essential minerals',
        suitableFor: ['Anemic patients', 'General Population'],
        precautions: ['Pregnant women should consult their doctor']
      }
    ],
    ingredients: [
      { name: 'Cassava leaves', amount: 500, unit: 'g' },
      { name: 'Pork', amount: 400, unit: 'g' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Ginger', amount: 2, unit: 'tbsp' }
    ],
    cookingSteps: [
      { stepNumber: 1, instruction: 'Clean and pound cassava leaves', duration: 20 },
      { stepNumber: 2, instruction: 'Cook pork with spices', duration: 30 },
      { stepNumber: 3, instruction: 'Combine and simmer', duration: 25 }
    ],
    prepTime: 30,
    cookTime: 60,
    servings: 4,
    imageUrl: '/images/ravitoto.jpg',
    tags: ['Cassava', 'Pork', 'Traditional'],
    difficulty: 'Hard'
  }
]; 