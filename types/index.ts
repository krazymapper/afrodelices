export type Language = 'en' | 'fr';

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
} 