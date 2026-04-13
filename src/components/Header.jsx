import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-12 px-6 max-w-4xl mx-auto border-b border-gray-100 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-indigo-600 transition-colors">
        Aaron's Blog
      </Link>
      <nav>
        <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
