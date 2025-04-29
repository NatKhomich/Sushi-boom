"use client";

import { useCategoryStore } from "@/app/store/category";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const categories = [
  { title: "Роллы", id: 1 },
  { title: "Сеты", id: 2 },
  { title: "Суши", id: 3 },
  { title: "Закуски", id: 4 },
  { title: "Напитки", id: 5 },
  { title: "Десерты", id: 6 },
];

export const Categories = ({ className }: Props) => {
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
              {c.title}
            </button>
          </a>
        </li>
      ))}
    </ul>
  );
};
