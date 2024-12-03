export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: number[];
  color: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed';
  date: string;
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
}

export interface ShippingAddress {
  fullName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface PaymentMethod {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}