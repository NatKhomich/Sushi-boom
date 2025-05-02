"use client";

import { useCategoryStore } from "@/app/store/category";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export const Categories = ({ categories, className }: Props) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  return (
    <ul className={cn("flex gap-2 mt-1", className)}>
      {categories.map((c) => (
        <li key={c.id} onClick={() => setActiveCategoryId(c.id)}>
          <a href={`#${c.id}`}>
            <button
              className={cn(
                "px-4 py-2 rounded-full transition-colors cursor-pointer",
                categoryActiveId === c.id && "text-primary font-bold"
              )}
            >
              {c.name}
            </button>
          </a>
        </li>
      ))}
    </ul>
  );
};
