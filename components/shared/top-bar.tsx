import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar = ({ categories, className }: Props) => {
  return (
    <div
      className={cn(
        "sticky top-0 py-3 z-10 flex items-center justify-between bg-background",
        className
      )}
    >
      <Categories categories={categories} />

      <SortPopup />
    </div>
  );
};
