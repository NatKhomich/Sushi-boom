import { Cart, CartItem, Product, ProductItem } from "@prisma/client";

export type CartItemDTO = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };
};

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}


export interface CreateCartItem {
  productItemId: number;
  quantity?: number;
  size?: number;
}
