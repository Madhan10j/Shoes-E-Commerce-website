import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const categoryTitle = category?.charAt(0).toUpperCase() + category?.slice(1);

  // Filter products based on category (you would typically have a category field in your products)
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">{categoryTitle} Shoes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};