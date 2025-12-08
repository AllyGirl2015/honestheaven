import React from 'react';

const GroupCard = ({ group, index }) => {
  return (
    <a 
      href={group.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative block h-full"
    >
      {/* Animated Rainbow Border Background */}
      <div className="absolute -inset-[2px] rounded-2xl bg-[linear-gradient(90deg,var(--color-rainbow-red),var(--color-rainbow-orange),var(--color-rainbow-yellow),var(--color-rainbow-green),var(--color-rainbow-blue),var(--color-rainbow-purple),var(--color-rainbow-red))] bg-[length:200%_100%] animate-border-flow opacity-100 transition-opacity duration-300"></div>
      
      {/* Card Content */}
      <div className="relative bg-white p-6 rounded-2xl h-full transition-all duration-300 group-hover:-translate-y-1 border border-transparent overflow-hidden">
        
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-gray-50 opacity-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500`}></div>
      
        <div className="mb-4 relative z-10">
          {/* Placeholder Icon - could be dynamic based on category */}
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
             <span className="text-2xl">🌈</span>
          </div>
        </div>
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 relative z-10">
          {group.title}
        </h3>
        <p className="text-gray-500 font-sans text-sm leading-relaxed relative z-10">
          {group.description}
        </p>
      </div>
    </a>
  );
};

export default GroupCard;
