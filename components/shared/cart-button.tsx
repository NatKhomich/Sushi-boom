"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "../ui";
import { cn } from "@/lib/utils";
import { CartDrawer } from "./cart-drawer";
import { useCartStore } from "@/app/store";

interface Props {
  className?: string;
}

export const CartButton = ({ className }: Props) => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const items = useCartStore((state) => state.items);
  return (
    <CartDrawer>
      <Button
        asChild
        className={cn("group relative cursor-pointer", className)}
      >
        <div>
          <b>{totalPrice} ₽</b>
          <span className="h-full w-[1px] bg-white/30 mx-3" />
          <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
            <ShoppingCart size={16} className="relative" strokeWidth={2} />
            <b>{items.length}</b>
          </div>
          <ArrowRight
            size={20}
            className=" absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </div>
      </Button>
    </CartDrawer>
  );
};
