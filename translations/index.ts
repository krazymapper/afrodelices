import { Translations } from '@/types';

export const translations: Record<string, Translations> = {
  en: {
    auth: {
      signup: {
        title: 'Create your account',
        subtitle: 'Join the community of African cuisine lovers',
        orSignIn: 'Or',
        signInLink: 'sign in to your account',
        fullName: 'Full Name',
        email: 'Email address',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        createAccount: 'Create account',
        creatingAccount: 'Creating account...',
        orContinueWith: 'Or continue with',
        continueWithGoogle: 'Continue with Google',
        discover: 'Discover African Cuisine',
        joinCommunity: 'Join our community of food lovers and explore authentic recipes from across Africa',
      },
      errors: {
        allFieldsRequired: 'All fields are required',
        passwordsDontMatch: 'Passwords do not match',
        genericError: 'An error occurred. Please try again.',
      },
    },
  },
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
  },
}; 