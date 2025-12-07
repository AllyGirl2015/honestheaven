import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md px-6 py-4 md:px-12 flex justify-between items-center border-b-4 border-transparent sticky top-0 z-50"
      style={{
        borderImage: 'linear-gradient(to right, #FF5F61, #FF9E57, #F9E65C, #5ED88B, #57A4FF, #B979FF) 1'
      }}
    >
      <div className="text-2xl font-heading font-bold bg-gradient-to-r from-rainbow-red via-rainbow-green to-rainbow-blue bg-clip-text text-transparent">
        Honest Haven
      </div>
      <nav>
        <a href="#" className="text-gray-600 ml-6 no-underline font-sans text-base hover:text-rainbow-purple transition-colors font-medium">
          Home
        </a>
        <a href="#" className="text-gray-600 ml-6 no-underline font-sans text-base hover:text-rainbow-purple transition-colors font-medium">
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;
