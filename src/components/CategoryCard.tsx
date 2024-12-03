import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  count: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, image, count }) => {
  return (
    <Link to={`/category/${title.toLowerCase()}`} className="relative group overflow-hidden rounded-lg">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
      </div>
      <div className="relative p-6 flex flex-col h-full justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-white text-sm">{count} Products</span>
          <div className="flex items-center gap-2 text-white hover:text-indigo-300 transition-colors">
            Shop Now
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};