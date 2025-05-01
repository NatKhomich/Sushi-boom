"use client";

import { Item } from "@/app/page";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { useEffect, useRef } from "react";
import { useCategoryStore } from "@/app/store/category";
import { Api } from "@/services/api-client";

interface Props {
  items: Item[];
  title: string;
  categoryId: number;
  className?: string;
}

export const ProductsGroupList = ({
  items,
  title,
  className,
  categoryId,
}: Props) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = useRef<any>(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, title]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await Api.products.getProducts();
      console.log("res", res);
    };
    getProducts();
  }, []);

  return (
    <div
      className={`scroll-target ${className}`}
      id={categoryId.toString()}
      ref={intersectionRef}
    >
      <Title size="md" className="font-extrabold my-5">
        {" "}
        {title}
      </Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((i) => (
          <ProductCard key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
};
