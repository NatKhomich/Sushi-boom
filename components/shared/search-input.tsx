"use client";

import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput = ({ className }: Props) => {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  useDebounce(
    async () => {
      try {
        const res = await Api.products.search(searchQuery);
        setProducts(res);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    300,
    [searchQuery]
  );

  const handleClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setFocused(false)}
        />
      )}
      <div
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Поиск по товарам"
          className="w-full h-full pl-10 pr-4 rounded-2xl bg-gray-100  dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div
        className={cn(
          "absolute top-14 py-2 w-full bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-200 z-30 opacity-0",
          focused && "visible opacity-100 top-12"
        )}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              onClick={handleClickItem}
              className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
            >
              <img
                className="rounded-sm h-8 w-8"
                src={product.imageUrl ?? ""}
                alt={product.name}
              />
              <div>{product.name}</div>
            </Link>
          ))
        ) : (
          <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-800">
            Ничего не найдено
          </div>
        )}
      </div>
    </>
  );
};
