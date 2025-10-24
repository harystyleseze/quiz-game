import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = ''
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 shadow-md';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60',
    secondary: 'bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900 focus:ring-gray-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60'
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{ 
        color: 'white',
        fontWeight: '600',
        fontSize: '1rem'
      }}
    >
      {children}
    </button>
  );
};

export default Button;