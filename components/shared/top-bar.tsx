import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";

interface Props {
  className?: string;
}

export const TopBar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "sticky top-0 py-3 z-10 flex items-center justify-between bg-background",
        className
      )}
    >
      <Categories />

      <SortPopup />
    </div>
  );
};
