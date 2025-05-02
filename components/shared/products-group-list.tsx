"use client";

import { ProductCard, ProductWithItems } from "./product-card";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { useEffect, useRef } from "react";
import { useCategoryStore } from "@/app/store/category";

interface Props {
  items: ProductWithItems[];
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
