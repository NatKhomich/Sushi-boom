"use client";

import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";
import { ProductImage } from "./product-image";
import { ProductVariants } from "./product-variants";
import { useState } from "react";
import { ProductWithItems } from "./product-card";

interface Props {
  product: ProductWithItems;
  className?: string;
}

export const ProductDetailsForm = ({ product, className }: Props) => {
  const { name, description, imageUrl, categoryId } = product;

  const [quantity, setQuantity] = useState("4");

  const currentPrice =
    product.items.find((i) => i.size === +quantity)?.price ||
    product.items[0].price;

  const handleAddToCart = () => {
    console.log({
      id: product.id,
      quantity,
      price: currentPrice,
      name,
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center h-[100%] rounded-2xl md:flex-row md:items-start",
        className
      )}
    >
      <ProductImage
        imageUrl={imageUrl}
        className="h-[100%] flex items-center"
      />

      <div className="flex flex-col justify-between items-end w-[400px] rounded-md p-4 h-[100%]">
        <div className="w-full">
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
        </div>

        <Button
          onClick={handleAddToCart}
          className="h-[55px] text-base rounded-s-md w-full mt-5"
        >
          Добавить в корзину - {currentPrice}р
        </Button>
      </div>
    </div>
  );
};
