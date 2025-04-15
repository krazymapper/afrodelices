'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { translations } from '@/translations';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import FormInput from '@/components/FormInput';
import { useLanguage } from '@/context/LanguageContext';

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { language, setLanguage } = useLanguage();
  const t = translations[language].auth.signup;
  const errors = translations[language].auth.errors;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError(errors.allFieldsRequired);
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError(errors.passwordsDontMatch);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || errors.genericError);
      }

      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        setError(errors.genericError);
      } else {
        router.push('/');
        router.refresh();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : errors.genericError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (err) {
      setError(errors.genericError);
    }
  };

  const images = [
    {
      src: '/images/jollof-rice.jpg',
      alt: 'Jollof Rice',
      className: 'col-span-2 h-48',
    },
    {
      src: '/images/Attiéké_Bénin.jpeg',
      alt: 'Attiéké Bénin',
      className: 'h-64',
    },
    {
      src: '/images/Sauce_d\'épinard.jpg',
      alt: 'Sauce d\'épinard',
      className: 'h-64',
    },
    {
      src: '/images/Mets_Béninois_sauce_tomate_viande.jpeg',
      alt: 'Mets Béninois',
      className: 'col-span-2 h-48',
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Image Gallery */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
        {/* Language Switcher */}
        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher
            currentLang={language}
            onLanguageChange={setLanguage}
          />
        </div>

        {/* Image Grid */}
        <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
          <div className="relative col-span-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20" />
          </div>
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`relative group ${image.className} overflow-hidden rounded-2xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 group-hover:opacity-0 transition-opacity duration-500" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/20 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 text-center">
          <h2 className="text-4xl font-bold text-white tracking-tight [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            {t.discover}
          </h2>
          <p className="mt-4 text-lg text-orange-50 max-w-2xl mx-auto leading-relaxed [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            {t.joinCommunity}
          </p>
          <div className="mt-6 flex justify-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-orange-200 animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-orange-300 animate-pulse delay-150" />
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse delay-300" />
          </div>
        </div>
      </div>

      {/* Right Column - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-8 sm:px-12 lg:px-16 xl:px-24 bg-white relative">
        {/* Mobile Language Switcher */}
        <div className="absolute top-4 right-4 lg:hidden">
          <LanguageSwitcher
            currentLang={language}
            onLanguageChange={setLanguage}
          />
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="flex justify-center mb-8 group">
              <span className="text-4xl font-bold text-orange-600 tracking-tight group-hover:text-orange-700 transition-colors">
                Yebesse
              </span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              {t.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {t.orSignIn}{' '}
              <Link href="/auth/signin" className="font-medium text-orange-600 hover:text-orange-500">
                {t.signInLink}
              </Link>
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative animate-shake">
              {error}
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <FormInput
                id="name"
                name="name"
                type="text"
                required
                label={t.fullName}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <FormInput
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                label={t.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <FormInput
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                label={t.password}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <FormInput
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                label={t.confirmPassword}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {isLoading ? t.creatingAccount : t.createAccount}
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {t.orContinueWith}
                </span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Image
                  src="/google.svg"
                  alt="Google logo"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {t.continueWithGoogle}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 