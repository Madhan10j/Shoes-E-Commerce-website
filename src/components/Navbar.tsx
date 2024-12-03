import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { AuthModal } from './AuthModal';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC<{ onCartClick: () => void }> = ({ onCartClick }) => {
  const { state } = useCart();
  const { state: authState } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <ShoppingBag className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">ShoeStore</span>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/category/running" className="text-gray-600 hover:text-gray-900">Running</Link>
              <Link to="/category/casual" className="text-gray-600 hover:text-gray-900">Casual</Link>
              <Link to="/category/athletic" className="text-gray-600 hover:text-gray-900">Athletic</Link>
            </div>
            
            <div className="flex items-center space-x-6">
              {authState.isAuthenticated ? (
                <UserMenu />
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sign In
                </button>
              )}
              <button
                onClick={onCartClick}
                className="relative p-2 rounded-full hover:bg-gray-100"
              >
                <ShoppingBag className="h-6 w-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
};