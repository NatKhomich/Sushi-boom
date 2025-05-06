"use client";

import { Dialog } from "../ui";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { DialogContent, DialogTitle } from "../ui/dialog";
import { useRouter } from "next/navigation";
import { ProductDetailsForm } from "./product-details-form";

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
          "flex flex-col md:min-w-2xl min-h-[500px] bg-secondary overflow-hidden border-2 rounded-xl border-primary/10 p-0",
          className
        )}
      >
        <DialogTitle></DialogTitle>

        <ProductDetailsForm product={product} />
      </DialogContent>
    </Dialog>
  );
};
