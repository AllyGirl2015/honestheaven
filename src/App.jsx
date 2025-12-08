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
        
        {/* Background Icons */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
           {/* Heart */}
           <svg className="absolute top-10 left-10 w-24 h-24 text-rainbow-red opacity-10 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
           {/* Star */}
           <svg className="absolute top-20 right-20 w-16 h-16 text-rainbow-yellow opacity-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
           {/* Genderless/Trans symbol approximation (circle) */}
           <svg className="absolute bottom-20 left-20 w-32 h-32 text-rainbow-purple opacity-5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
           {/* Another Heart */}
           <svg className="absolute bottom-40 right-10 w-20 h-20 text-rainbow-blue opacity-10 transform rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>

        <div className="relative z-10 px-6 py-24 md:py-32 md:px-12 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6 border border-gray-200">
            Welcome to Honest Heaven 🏳️‍🌈
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rainbow-red via-rainbow-purple to-rainbow-blue">Supporting LGBTQ+ Texans</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-sans text-xl leading-relaxed">
            A space to learn about movements supporting the dignity, safety, and visibility of LGBTQ+ communities. Explore groups raising awareness and encouraging public dialogue.
          </p>
        </div>
      </div>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="relative p-[3px] rounded-2xl bg-[linear-gradient(90deg,var(--color-rainbow-red),var(--color-rainbow-orange),var(--color-rainbow-yellow),var(--color-rainbow-green),var(--color-rainbow-blue),var(--color-rainbow-purple),var(--color-rainbow-red))] bg-[length:200%_100%] animate-border-flow">
            <div className="bg-white rounded-xl p-8 md:p-12 text-center h-full">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">About Honest Heaven</h2>
              <div className="prose prose-lg mx-auto text-gray-600 font-sans leading-relaxed space-y-6">
                <p>
                  Before we begin, this message is produced by an independent movement. As a transgender-founded organization, <strong>RBEW</strong> supports the dignity, safety, and visibility of LGBTQ+ Texans. While some of this movement's values align with ours, RBEW is not formally affiliated with or endorsing the organization; we are simply providing space for them to share their story.
                </p>
                <p>
                  Texas Senate Bill 8 and House Bill 29 introduced restrictions that target transgender Texans. These laws affect restroom access, legal identification, and basic dignity issues that shape how people move through everyday life.
                </p>
                <p>
                  One community movement speaking out about these laws is the <strong>6W Project</strong>. They aim to raise awareness, encourage public dialogue, and highlight how these policies impact real people.
                </p>
                <p className="text-sm italic mt-8 text-gray-500">
                  The following message reflects the movement's voice, not an endorsement, simply to provide a platform for Texans to understand what is happening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <main id="communities" className="flex-grow px-6 py-16 md:px-12 max-w-7xl mx-auto w-full relative z-10">
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
        <p>&copy; {new Date().getFullYear()} Honest Heaven. Made with 🏳️‍🌈 and love.</p>
      </footer>
    </div>
  );
}

export default App;
