import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-yellow-400" />
            <span className="text-yellow-400 font-semibold">New Collection Available</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Step into Style and Comfort
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Discover our premium collection of shoes designed for every occasion.
            From athletic performance to casual elegance, find your perfect pair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/category/running"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 flex items-center justify-center gap-2 transition-colors"
            >
              Shop Collection
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/category/limited-edition"
              className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Lookbook
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold">Trusted by 10,000+ customers</span>
              <span className="text-gray-400 text-sm">Over 500+ 5-star reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};