import { cn } from "@/lib/utils";
import {
  CartItemImage,
  CartItemInfo,
  CartItemPrice,
} from "./cart-item-details";
import { CountButton } from "./count-button";
import { Trash2Icon } from "lucide-react";

interface Props {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  size: number | null;
  className?: string;
}

export const CartDrawerItem = ({
  id,
  imageUrl,
  description,
  name,
  price,
  size,
  quantity,
  className,
}: Props) => {
  return (
    <div className={cn("flex gap-4 mt-4 p-2 rounded-xl bg-white", className)}>
      <CartItemImage src={imageUrl} className="rounded-lg" />
      <div className="w-full">
        <div className="flex items-center gap-3">
          <CartItemInfo name={name} description={description} size={size} />
        </div>

        <hr className="my-3" />

        <div className="flex items-center justify-between ">
          <CountButton value={quantity} />

          <div className="flex items-center gap-2">
            <CartItemPrice price={price} />
            <Trash2Icon
              size={20}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
