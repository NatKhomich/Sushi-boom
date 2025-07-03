import { cn } from "@/lib/utils";
import {
  CartItemImage,
  CartItemInfo,
  CartItemPrice,
} from "./cart-item-details";
import { CountButton } from "./count-button";
import { Trash2Icon } from "lucide-react";
import { CartItemView } from "@/lib/get-cart-details";

interface Props {
  cartItem: CartItemView;
  className?: string;
  onUpdateQuantity: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  onDeleteItem: (id: number) => void;
}

export const CartDrawerItem = ({
  cartItem: { id, imageUrl, name, price, quantity, description, size },
  className,
  onUpdateQuantity,
  onDeleteItem,
}: Props) => {
  const onUpdateQuantityHandler = (type: "plus" | "minus") => {
    onUpdateQuantity(id, quantity, type);
  };
  return (
    <div className={cn("flex gap-4 mt-4 p-2 rounded-xl bg-white", className)}>
      <CartItemImage src={imageUrl} className="rounded-lg" />
      <div className="w-full">
        <div className="flex items-center gap-3">
          <CartItemInfo name={name} description={description} size={size} />
        </div>

        <hr className="my-3" />

        <div className="flex items-center justify-between ">
          <CountButton value={quantity} onClick={onUpdateQuantityHandler} />

          <div className="flex items-center gap-2">
            <CartItemPrice price={price} />
            <Trash2Icon
              size={20}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              onClick={() => onDeleteItem(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
