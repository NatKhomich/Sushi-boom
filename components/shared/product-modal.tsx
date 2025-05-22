"use client";

import { Dialog } from "../ui";
import { cn } from "@/lib/utils";
import { DialogContent, DialogTitle } from "../ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { ProductDetailsForm } from "./product-details-form";
import { ProductWithItems } from "./product-card";

interface Props {
  product: ProductWithItems;
  className?: string;
}

export const ProductModal = ({ product, className }: Props) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "flex flex-col md:min-w-2xl h-[400px] p-3 bg-secondary overflow-hidden border-2 rounded-xl border-primary/10",
          className
        )}
      >
        <DialogTitle></DialogTitle>

        <ProductDetailsForm product={product} />
      </DialogContent>
    </Dialog>
  );
};
