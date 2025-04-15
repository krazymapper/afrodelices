'use client';

import { useState, useEffect } from 'react';
import { Language } from '@/types';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSwitcher({ currentLang, onLanguageChange }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-orange-200/20">
        <button
          onClick={() => onLanguageChange('fr')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLang === 'fr'
              ? 'bg-orange-600 text-white shadow-sm'
              : 'text-orange-700 hover:text-orange-800'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLang === 'en'
              ? 'bg-orange-600 text-white shadow-sm'
              : 'text-orange-700 hover:text-orange-800'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
} 