'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';
import { products, categories } from '@/data/products';

// ========== Helper ==========
function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, ''); // remove special chars
}

// ========== Types ==========
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  categorySlug: string;
  rating: number;
  reviews: number;
  description: string;
  isNew?: boolean;
  isOnSale?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

interface BeautyState {
  user: User | null;
  cart: CartItem[];
  wishlist: Product[];
  products: Product[];
  categories: Category[];
  isAuthenticated: boolean;
}

type BeautyAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'SET_CATEGORIES'; payload: Category[] };

const initialState: BeautyState = {
  user: null,
  cart: [],
  wishlist: [],
  products: [],
  categories: [],
  isAuthenticated: false,
};

// ========== Reducer ==========
function beautyReducer(state: BeautyState, action: BeautyAction): BeautyState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isAuthenticated: true };

    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false };

    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'ADD_TO_WISHLIST':
      if (state.wishlist.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };

    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };

    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };

    default:
      return state;
  }
}

// ========== Context ==========
const BeautyContext = createContext<{
  state: BeautyState;
  dispatch: React.Dispatch<BeautyAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const useBeauty = () => {
  const context = useContext(BeautyContext);
  if (!context) {
    throw new Error('useBeauty must be used within a BeautyProvider');
  }
  return context;
};

// ========== Provider ==========
export const BeautyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(beautyReducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('beautyState');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        if (parsed.user) {
          dispatch({ type: 'LOGIN', payload: parsed.user });
        }
        if (parsed.cart) {
          parsed.cart.forEach((item: CartItem) => {
            for (let i = 0; i < item.quantity; i++) {
              dispatch({ type: 'ADD_TO_CART', payload: item });
            }
          });
        }
        if (parsed.wishlist) {
          parsed.wishlist.forEach((product: Product) => {
            dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
          });
        }
      } catch (error) {
        console.error('Failed to load state from localStorage:', error);
      }
    }

    // ✅ Enrich categories & products with slugs
    const enrichedCategories = categories.map((c) => ({
      ...c,
      slug: slugify(c.name),
    }));

    const enrichedProducts = products.map((p) => ({
      ...p,
      categorySlug: slugify(p.category),
    }));

    dispatch({ type: 'SET_PRODUCTS', payload: enrichedProducts });
    dispatch({ type: 'SET_CATEGORIES', payload: enrichedCategories });
  }, []);

  useEffect(() => {
    const stateToSave = {
      user: state.user,
      cart: state.cart,
      wishlist: state.wishlist,
    };
    localStorage.setItem('beautyState', JSON.stringify(stateToSave));
  }, [state.user, state.cart, state.wishlist]);

  return (
    <BeautyContext.Provider value={{ state, dispatch }}>
      {children}
    </BeautyContext.Provider>
  );
};