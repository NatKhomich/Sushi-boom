"use client";

import Link from "next/link";
import { Button, Sheet } from "../ui";
import {
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import clsx from "clsx";
import { useCartStore } from "@/app/store";
import { useEffect } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CartDrawer = ({ children, className }: Props) => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const changeItemQuantity = useCartStore((state) => state.changeItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleUpdateQuantity = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    changeItemQuantity(id, newQuantity);
  };

  const handleDeleteItem = (id: number) => {
    removeCartItem(id);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className={clsx(
          "flex flex-col justify-between pb-0 bg-accent",
          className
        )}
      >
        <div
          className={clsx(
            "flex flex-col h-full",
            !items.length && "justify-center"
          )}
        >
          <SheetHeader>
            <SheetTitle>
              В корзине <span className="font-bold">{items.length} товара</span>
            </SheetTitle>
          </SheetHeader>
          <div className="-mx-4 mt-5 overflow-auto flex-1">
            {items.map((item) => (
              <CartDrawerItem
                key={item.id}
                cartItem={item}
                onUpdateQuantity={handleUpdateQuantity}
                onDeleteItem={handleDeleteItem}
              />
            ))}
          </div>

          <SheetFooter className="-mx-6 p-8">
            <div className="w-full">
              <div className="flex mb-4">
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                </span>
                <span className="font-bold text-lg">{totalPrice}р</span>
              </div>

              <Link href="/cart">
                <Button type="submit" className="w-full h-12 text-base">
                  Оформить заказ
                  <ArrowRight className="w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
