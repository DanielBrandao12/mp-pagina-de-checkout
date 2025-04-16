import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-10 bg-white rounded p-10 shadow">
      {children}
    </div>
  );
};

export default Card;
