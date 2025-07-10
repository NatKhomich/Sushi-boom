import { getCartDetails } from "@/lib";
import { CartItemView } from "@/lib/get-cart-details";
import { Api } from "@/services/api-client";
import { CreateCartItem } from "@/services/dto/cart.dto";
import { create } from "zustand";

interface State {
  loading: boolean;
  error: boolean;
  totalPrice: number;
  items: CartItemView[];
  fetchCartItems: () => Promise<void>;
  changeItemQuantity: (id: number, quantity: number) => Promise<void>;
  addCartItem: (values: CreateCartItem) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<State>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  disabled: false,
  totalPrice: 0,
  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.fetchCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  changeItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateCartItemQuantity(id, quantity);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  addCartItem: async (values: CreateCartItem) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.addCartItem(values);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  removeCartItem: async (id: number) => {
    try {
      set((state) => ({
        loading: true,
        error: false,
        items: state.items.map((item) =>
          item.id == id ? { ...item, disabled: true } : item
        ),
      }));
      const data = await Api.cart.removeCartItem(id);
      set(getCartDetails(data));
    } catch (error) {
      set({ error: true });
      console.error(error);
    } finally {
      set((state) => ({
        loading: false,
        items: state.items.map((item) => ({ ...item, disabled: false })),
      }));
    }
  },
}));
