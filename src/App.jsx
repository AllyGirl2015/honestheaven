import React from 'react';
import Header from './components/Header';
import GroupCard from './components/GroupCard';
import { groups } from './data/groups';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-white">
        {/* Subtle Rainbow Gradient Background */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(90deg,var(--color-rainbow-red),var(--color-rainbow-orange),var(--color-rainbow-yellow),var(--color-rainbow-green),var(--color-rainbow-blue),var(--color-rainbow-purple))]"></div>

        <div className="relative z-10 px-6 py-24 md:py-32 md:px-12 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6 border border-gray-200">
            Welcome to Honest Haven 🏳️‍🌈
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-gray-900">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rainbow-red via-rainbow-purple to-rainbow-blue">Community</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-sans text-xl leading-relaxed mb-10">
            You belong here. A safe, beautiful space curated for every letter of the acronym. Discover supportive groups, movements, and resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Explore Groups
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <main className="flex-grow px-6 py-16 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900">
            Featured Communities
          </h2>
          <div className="h-1 flex-grow mx-6 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {groups.map((group, index) => (
            <GroupCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </main>

      <footer className="py-12 text-center text-gray-500 text-sm font-sans border-t border-gray-100 bg-gray-50">
        <p>&copy; {new Date().getFullYear()} Honest Haven. Made with 🏳️‍🌈 and love.</p>
      </footer>
    </div>
  );
}

export default App;
