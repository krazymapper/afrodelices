import { Translations } from '@/types';

export const translations: Record<string, Translations> = {
  fr: {
    auth: {
      signup: {
        title: 'Créez votre compte',
        subtitle: 'Rejoignez la communauté des amateurs de cuisine africaine',
        orSignIn: 'Ou',
        signInLink: 'connectez-vous à votre compte',
        fullName: 'Nom complet',
        email: 'Adresse e-mail',
        password: 'Mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        createAccount: 'Créer un compte',
        creatingAccount: 'Création du compte...',
        orContinueWith: 'Ou continuer avec',
        continueWithGoogle: 'Continuer avec Google',
        discover: 'Découvrez la Cuisine Africaine',
        joinCommunity: 'Rejoignez notre communauté de passionnés et explorez des recettes authentiques de toute l\'Afrique',
      },
      errors: {
        allFieldsRequired: 'Tous les champs sont obligatoires',
        passwordsDontMatch: 'Les mots de passe ne correspondent pas',
        genericError: 'Une erreur est survenue. Veuillez réessayer.',
      },
    },
    title: "Découvrez la Cuisine Africaine & Malgache",
    subtitle: "Explorez plus de 300 recettes authentiques avec des instructions détaillées et leurs propriétés thérapeutiques",
    searchPlaceholder: "Rechercher des recettes...",
    allRegions: "Toutes les Régions",
    allMealTypes: "Tous les Types de Repas",
    noRecipesFound: "Aucune recette trouvée",
    tryAdjusting: "Essayez d'ajuster vos critères de recherche ou vos filtres",
    regions: {
      "West Africa": "Afrique de l'Ouest",
      "East Africa": "Afrique de l'Est",
      "North Africa": "Afrique du Nord",
      "South Africa": "Afrique du Sud",
      "Central Africa": "Afrique Centrale",
      "Madagascar": "Madagascar"
    },
    mealTypes: {
      "Lunch": "Déjeuner",
      "Dinner": "Dîner"
    }
  }
}; 