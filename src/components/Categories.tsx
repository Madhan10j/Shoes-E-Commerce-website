import React from 'react';
import { CategoryCard } from './CategoryCard';

const categories = [
  {
    title: 'Running',
    description: 'High-performance shoes for every runner',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    count: 24
  },
  {
    title: 'Casual',
    description: 'Everyday comfort meets style',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
    count: 18
  },
  {
    title: 'Athletic',
    description: 'Professional sports and training footwear',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
    count: 32
  },
  {
    title: 'Limited Edition',
    description: 'Exclusive designs and collaborations',
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634',
    count: 8
  }
];

export const Categories: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of shoes for every occasion and style preference
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};