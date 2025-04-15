export type MealType = 'Lunch' | 'Dinner';

export type GeographicalArea = 'West Africa' | 'East Africa' | 'North Africa' | 'South Africa' | 'Central Africa' | 'Madagascar';

export interface TherapeuticProperty {
  condition: string;
  benefits: string;
  suitableFor: string[];
  precautions?: string[];
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface CookingStep {
  stepNumber: number;
  instruction: string;
  duration?: number; // in minutes
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  mealType: MealType[];
  countryOfOrigin: string;
  geographicalArea: GeographicalArea;
  therapeuticProperties?: TherapeuticProperty[];
  ingredients: Ingredient[];
  cookingSteps: CookingStep[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  imageUrl?: string;
  tags: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Country {
  name: string;
  code: string;
  geographicalArea: GeographicalArea;
  flagUrl?: string;
  description?: string;
} 