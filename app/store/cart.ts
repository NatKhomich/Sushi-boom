import { getCartDetails } from "@/lib";
import { CartItemView } from "@/lib/get-cart-details";
import { Api } from "@/services/api-client";
import { create } from "zustand";

interface State {
  loading: boolean;
  error: boolean;
  totalPrice: number;
  items: CartItemView[];
  fetchCartItems: () => Promise<void>;
  //   changeItemQuantity: (id: number, quantity: number) => Promise<void>;
  //   addCartItem: (values: any) => Promise<void>;
  //   removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<State>((set, get) => ({
  items: [],
  error: false,
  loading: true,
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
  //   changeItemQuantity: async (id: number, quantity: number) => {
  //     try {
  //       set({ loading: true, error: false });
  //       const data = await Api.cart.updateItemQuantity(id, quantity);
  //       set(getCartDetails(data));
  //     } catch (error) {
  //       console.error(error);
  //       set({ error: true });
  //     } finally {
  //       set({ loading: false });
  //     }
  //   },
  //   addCartItem: async (values: any) => {
  //     try {
  //       set({ loading: true, error: false });
  //       const data = await Api.cart.addCartItem(values);
  //       set(getCartDetails(data));
  //     } catch (error) {
  //       console.error(error);
  //       set({ error: true });
  //     } finally {
  //       set({ loading: false });
  //     }
  //   },
  //   removeCartItem: async (id: number) => {
  //     try {
  //       set({ loading: true, error: false });
  //       const data = await Api.cart.removeCartItem(id);
  //       set(getCartDetails(data));
  //     } catch (error) {
  //       set({ error: true });
  //       console.error(error);
  //     } finally {
  //       set({ loading: false });
  //     }
  //   },
}));
