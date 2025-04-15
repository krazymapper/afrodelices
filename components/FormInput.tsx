'use client';

import { useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FormInput({ label, error, ...props }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={props.id}
        className={`absolute left-3 transition-all duration-200 ${
          isFocused || props.value
            ? '-top-2 text-xs bg-white px-1 text-orange-600'
            : 'top-3 text-gray-500'
        }`}
      >
        {label}
      </label>
      <input
        {...props}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        className={`block w-full px-3 py-2 border rounded-md shadow-sm text-gray-900 text-sm
          transition-all duration-200
          ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
          'border-gray-300 focus:border-orange-500 focus:ring-orange-500'}
          focus:outline-none focus:ring-2 focus:ring-opacity-50
          ${props.className || ''}`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600 absolute">
          {error}
        </p>
      )}
    </div>
  );
} 