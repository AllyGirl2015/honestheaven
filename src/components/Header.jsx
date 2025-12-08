import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md px-6 py-4 md:px-12 flex justify-between items-center border-b-4 border-transparent sticky top-0 z-50"
      style={{
        borderImage: 'linear-gradient(to right, #FF5F61, #FF9E57, #F9E65C, #5ED88B, #57A4FF, #B979FF) 1'
      }}
    >
      <div className="text-2xl font-heading font-bold bg-[linear-gradient(90deg,var(--color-rainbow-red),var(--color-rainbow-orange),var(--color-rainbow-yellow),var(--color-rainbow-green),var(--color-rainbow-blue),var(--color-rainbow-purple),var(--color-rainbow-red))] bg-[length:200%_auto] animate-border-flow bg-clip-text text-transparent">
        Honest Heaven
      </div>
      <nav className="hidden md:flex">
        <a href="#" className="text-gray-600 ml-6 no-underline font-sans text-base hover:text-rainbow-purple transition-colors font-medium">
          Home
        </a>
        <a href="#about" className="text-gray-600 ml-6 no-underline font-sans text-base hover:text-rainbow-purple transition-colors font-medium">
          About
        </a>
        <a href="#communities" className="text-gray-600 ml-6 no-underline font-sans text-base hover:text-rainbow-purple transition-colors font-medium">
          Communities
        </a>
      </nav>
    </header>
  );
};

export default Header;
