// src/components/PrimaryButton.js
import React from 'react';
import Spinner from '../spinner/Spinner';

const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  isLoading = false,
  ...props
}) => {
  const baseStyles = 'bg-highlight text-white p-2 rounded hover:bg-blue-700 transition duration-200 ease-in-out';
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className} ${disabled ? disabledStyles : ''}`}
      disabled={disabled}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
