import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { OrdersPage } from './pages/OrdersPage';
import { Cart } from './components/Cart';

function App() {
  const [showCart, setShowCart] = React.useState(false);

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <div className="min-h-screen bg-gray-100">
              <Navbar onCartClick={() => setShowCart(true)} />
              
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/orders" element={<OrdersPage />} />
              </Routes>
              
              {showCart && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">Your Cart</h2>
                      <button
                        onClick={() => setShowCart(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </div>
                    <Cart />
                  </div>
                </div>
              )}
            </div>
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;