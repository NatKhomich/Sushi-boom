import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { Product, ProductItem } from "@prisma/client";

export type ProductWithItems = Product & {
  items: ProductItem[];
};

interface Props {
  item: ProductWithItems;
  className?: string;
}

export const ProductCard = ({ item, className }: Props) => {
  const { id, imageUrl, name } = item;
  return (
    <div className={cn("shadow-2xs p-3", className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-primary/5 rounded-lg h-[260px]">
          {imageUrl && (
            <img
              src={imageUrl || ""}
              alt="product"
              className="w-[215px] h-[215px] object-cover"
            />
          )}
        </div>

        <Title size="sm" className="mb-1 mt-3 font-bold">
          {name}
        </Title>

        <div className="flex justify-between">
          <span className="text-[20px]">
            {item.categoryId === 1
              ? `от ${item.items[0].price}р`
              : `${item.items[0].price}р`}
          </span>

          <Button variant="outline" className="text-base font-bold ml-2">
            <Plus size={20} className=" mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
