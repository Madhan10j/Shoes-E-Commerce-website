import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { ShippingAddress, PaymentMethod } from '../types';
import { CreditCard, Truck, CheckCircle } from 'lucide-react';

export const Checkout: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const navigate = useNavigate();
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { dispatch: orderDispatch } = useOrders();
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: '',
  });

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate payment processing
    setStep('confirmation');
    
    // Create new order
    const newOrder = {
      id: Math.random().toString(36).substr(2, 9),
      items: cartState.items,
      total: cartState.total,
      status: 'processing' as const,
      date: new Date().toISOString(),
      shippingAddress,
      paymentMethod: {
        ...paymentMethod,
        cardNumber: paymentMethod.cardNumber.slice(-4).padStart(16, '*'),
      },
    };

    // Add order and clear cart
    orderDispatch({ type: 'ADD_ORDER', payload: newOrder });
    
    // Simulate order processing
    setTimeout(() => {
      orderDispatch({
        type: 'UPDATE_ORDER_STATUS',
        payload: { orderId: newOrder.id, status: 'completed' },
      });
    }, 2000);

    // Clear cart after successful payment
    cartState.items.forEach(item => {
      cartDispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
    });

    // Navigate to orders page after 3 seconds
    setTimeout(() => {
      onClose();
      navigate('/orders');
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        {['shipping', 'payment', 'confirmation'].map((s, index) => (
          <div
            key={s}
            className={`flex items-center ${
              index < ['shipping', 'payment', 'confirmation'].indexOf(step) + 1
                ? 'text-indigo-600'
                : 'text-gray-400'
            }`}
          >
            {s === 'shipping' && <Truck className="w-5 h-5 mr-2" />}
            {s === 'payment' && <CreditCard className="w-5 h-5 mr-2" />}
            {s === 'confirmation' && <CheckCircle className="w-5 h-5 mr-2" />}
            <span className="capitalize">{s}</span>
          </div>
        ))}
      </div>

      {step === 'shipping' && (
        <form onSubmit={handleShippingSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-2 border rounded"
            value={shippingAddress.fullName}
            onChange={e => setShippingAddress(prev => ({ ...prev, fullName: e.target.value }))}
          />
          <input
            type="text"
            placeholder="Street Address"
            required
            className="w-full p-2 border rounded"
            value={shippingAddress.street}
            onChange={e => setShippingAddress(prev => ({ ...prev, street: e.target.value }))}
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              required
              className="p-2 border rounded"
              value={shippingAddress.city}
              onChange={e => setShippingAddress(prev => ({ ...prev, city: e.target.value }))}
            />
            <input
              type="text"
              placeholder="State"
              required
              className="p-2 border rounded"
              value={shippingAddress.state}
              onChange={e => setShippingAddress(prev => ({ ...prev, state: e.target.value }))}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="ZIP Code"
              required
              className="p-2 border rounded"
              value={shippingAddress.zipCode}
              onChange={e => setShippingAddress(prev => ({ ...prev, zipCode: e.target.value }))}
            />
            <input
              type="text"
              placeholder="Country"
              required
              className="p-2 border rounded"
              value={shippingAddress.country}
              onChange={e => setShippingAddress(prev => ({ ...prev, country: e.target.value }))}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Continue to Payment
          </button>
        </form>
      )}

      {step === 'payment' && (
        <form onSubmit={handlePaymentSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            required
            pattern="[0-9]{16}"
            className="w-full p-2 border rounded"
            value={paymentMethod.cardNumber}
            onChange={e => setPaymentMethod(prev => ({ ...prev, cardNumber: e.target.value }))}
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              required
              pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
              className="p-2 border rounded"
              value={paymentMethod.expiryDate}
              onChange={e => setPaymentMethod(prev => ({ ...prev, expiryDate: e.target.value }))}
            />
            <input
              type="text"
              placeholder="CVV"
              required
              pattern="[0-9]{3,4}"
              className="p-2 border rounded"
              value={paymentMethod.cvv}
              onChange={e => setPaymentMethod(prev => ({ ...prev, cvv: e.target.value }))}
            />
          </div>
          <input
            type="text"
            placeholder="Card Holder Name"
            required
            className="w-full p-2 border rounded"
            value={paymentMethod.cardHolder}
            onChange={e => setPaymentMethod(prev => ({ ...prev, cardHolder: e.target.value }))}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Pay ${cartState.total.toFixed(2)}
          </button>
        </form>
      )}

      {step === 'confirmation' && (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-4">
            Your order has been placed and is being processed.
          </p>
          <p className="text-gray-600">
            You will be redirected to your orders page shortly...
          </p>
        </div>
      )}
    </div>
  );
};