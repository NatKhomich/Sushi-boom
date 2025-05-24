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

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CartDrawer = ({ children, className }: Props) => {
  const totalAmount = 2;
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-accent">
        <div className={clsx('flex flex-col h-full', !totalAmount && 'justify-center')}>
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>
        <div className="-mx-4 mt-5 overflow-auto flex-1">
          <CartDrawerItem />
          <CartDrawerItem />
        </div>

        <SheetFooter className="-mx-6 p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">500p</span>
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
