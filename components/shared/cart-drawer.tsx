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

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CartDrawer = ({ children, className }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-blend-color">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

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
                Офорить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
