"use client";

import { Dialog } from "../ui";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { DialogContent, DialogTitle } from "../ui/dialog";
import { useRouter } from "next/navigation";


interface Props {
  product: Product;
  className?: string;
}

export const ProductModal = ({ product, className }: Props) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-secondary/20 overflow-hidden",
          className
        )}
      >
        <DialogTitle>{product.name} </DialogTitle>
      </DialogContent>
    </Dialog>
  );
};
