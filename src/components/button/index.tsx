import React from 'react';

interface ButtonProps {
  title: string;
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="w-125 h-10 px-4 py-2 bg-black text-white rounded hover:bg-stone-800 transition duration-300 ease-in-out cursor-pointer"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
