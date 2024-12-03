import React from 'react';
import { products } from '../data/products';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Shoe Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm mt-2">{product.description}</p>
            <div className="mt-2">
              <span className="text-sm text-gray-500">Category: {product.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 