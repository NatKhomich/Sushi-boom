import { cn } from "@/lib/utils";
import {
  CartItemImage,
  CartItemInfo,
  CartItemPrice,
} from "./cart-item-details";
import { CountButton } from "./count-button";

interface Props {
  className?: string;
}

export const CartDrawerItem = ({ className }: Props) => {
  return (
    <div className={cn("flex gap-4 mt-4 p-2 rounded-xl bg-white", className)}>
      <CartItemImage src="/images/rolls.png" className="rounded-lg" />
      <div className="w-full">
        <div className="flex items-center gap-3">
          <CartItemInfo name="Филаделфия" />
        </div>

        <hr className="my-3" />

        <div className="flex items-center justify-between ">
          <CountButton />
          <CartItemPrice price={500} />
        </div>
      </div>
    </div>
  );
};
