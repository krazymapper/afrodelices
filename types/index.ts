export type Language = 'fr';

export type GeographicalArea = 'West Africa' | 'East Africa' | 'North Africa' | 'South Africa' | 'Central Africa' | 'Madagascar';

export type MealType = 'Lunch' | 'Dinner';

export interface Recipe {
  id: string;
  name: string;
  description: string;
  geographicalArea: GeographicalArea;
  mealType: MealType[];
  therapeuticProperties?: string[];
  image: string;
}

export interface Translations {
  auth: {
    signup: {
      title: string;
      subtitle: string;
      orSignIn: string;
      signInLink: string;
      fullName: string;
      email: string;
      password: string;
      confirmPassword: string;
      createAccount: string;
      creatingAccount: string;
      orContinueWith: string;
      continueWithGoogle: string;
      discover: string;
      joinCommunity: string;
    };
    errors: {
      allFieldsRequired: string;
      passwordsDontMatch: string;
      genericError: string;
    };
  };
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  allRegions: string;
  allMealTypes: string;
  noRecipesFound: string;
  tryAdjusting: string;
  regions: Record<GeographicalArea, string>;
  mealTypes: Record<MealType, string>;
} 