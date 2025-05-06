"use client";

import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";
import { Product } from "@prisma/client";
import { ProductImage } from "./product-image";
import { ProductVariants } from "./product-variants";
import { useState } from "react";

interface Props {
  product: Product;
  className?: string;
}

export const ProductDetailsForm = ({ product, className }: Props) => {
  const { name, description, imageUrl, categoryId } = product;

  const [quantity, setQuantity] = useState("4");

  return (
    <div
      className={cn(
        "flex flex-col items-center px-3 rounded-2xl md:flex-row md:items-start",
        className
      )}
    >
      <ProductImage className="mt-9" imageUrl={imageUrl} />

      <div className="flex flex-col justify-between items-end w-[400px] rounded-md p-7">
        <div className="w-full">
          <Title className="font-extrabold">{name}</Title>
          <p className="text-gray-400">{description}</p>
        </div>

        {categoryId === 1 && (
          <ProductVariants
            items={[
              { name: "4шт", value: "4" },
              { name: "8шт", value: "8" },
            ]}
            selectedValue={quantity}
            onChangeVariant={(value) => setQuantity(value)}
            className="mt-5"
          />
        )}

        <Button className="h-[55px] text-base rounded-s-md w-full mt-5">
          Добавить в корзину
        </Button>
      </div>
    </div>
  );
};
