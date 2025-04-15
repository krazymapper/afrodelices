import { useMemo } from 'react';

interface RecipeImageProps {
  name: string;
  className?: string;
}

export default function RecipeImage({ name, className = '' }: RecipeImageProps) {
  const gradientClass = useMemo(() => {
    // Create a deterministic gradient based on the recipe name
    const hash = name.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    const gradients = [
      'from-orange-400 to-amber-600', // Warm orange
      'from-orange-500 to-red-600',   // Deep orange
      'from-amber-400 to-yellow-600', // Golden
      'from-yellow-400 to-amber-600', // Sunny
      'from-red-400 to-orange-600',   // Spicy
      'from-rose-400 to-red-600',     // Rich red
    ];
    
    return gradients[Math.abs(hash) % gradients.length];
  }, [name]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} animate-gradient`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-xl font-semibold drop-shadow-lg">
          {name}
        </span>
      </div>
    </div>
  );
} 