"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  className?: string;
}

const categories = [
  { title: "Сеты", id: 1 },
  { title: "Роллы", id: 2 },
  { title: "Суши", id: 3 },
  { title: "Закуски", id: 4 },
  { title: "Напитки", id: 5 },
  { title: "Десерты", id: 6 },
];

export const Categories = ({ className }: Props) => {
  const [activeId, setActiveId] = useState<number>(categories[0].id);
  return (
    <ul className={cn("flex gap-2 mt-1", className)}>
      {categories.map((c) => (
        <li key={c.id}>
          <button
            onClick={() => setActiveId(c.id)}
            className={cn(
              "px-4 py-2 rounded-full transition-colors cursor-pointer",
              activeId === c.id && "text-primary font-bold"
            )}
          >
            {c.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
