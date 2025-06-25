import { CartDTO } from "@/services/dto/cart.dto";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export interface CartItemView {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  size: number | null;
  description: string;
}

interface ReturnType {
  items: CartItemView[];
  totalPrice: number;
}

export const getCartDetails = (data: CartDTO): ReturnType => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    price: calcCartItemTotalPrice(item),
    size: item.productItem.size,
    description: item.productItem.product.description,
  }));
  return {
    totalPrice: data.totalPrice,
    items,
  };
};
