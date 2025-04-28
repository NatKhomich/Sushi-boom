import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { Item } from "@/app/page";

interface Props {
  item: Item;
  className?: string;
}

export const ProductCard = ({ item, className }: Props) => {
  const { id, imageUrl, name, price } = item;
  return (
    <div className={cn("shadow-2xs p-3 border-2 border-primary", className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          {imageUrl && (
            <img
              src={imageUrl || ""}
              alt="product"
              className="w-[215px] h-[215px]"
            />
          )}
        </div>

        <Title size="sm" className="mb-1 mt-3 font-bold">
          {name}
        </Title>

        <div className="flex justify-between">
          <span className="text-[20px]">{price}р</span>

          <Button variant="outline" className="text-base font-bold ml-2">
            <Plus size={20} className=" mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
