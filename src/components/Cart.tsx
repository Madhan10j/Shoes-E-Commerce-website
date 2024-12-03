import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import { Checkout } from './Checkout';

export const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleRemove = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  if (showCheckout) {
    return <Checkout onClose={() => setShowCheckout(false)} />;
  }

  if (state.items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {state.items.map((item) => (
        <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
            <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              className="px-2 py-1 bg-gray-100 rounded"
            >
              -
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              className="px-2 py-1 bg-gray-100 rounded"
            >
              +
            </button>
          </div>
          <button
            onClick={() => handleRemove(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="font-bold text-lg">${state.total.toFixed(2)}</span>
        </div>
        <button
          onClick={() => setShowCheckout(true)}
          className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};