import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface Props {
  className?: string;
}

export const SortPopup = ({ className }: Props) => {
  return (
    <div className={cn("flex items-center px-5 rounded-2xl cursor-pointer gap-1", className)}>
      <ArrowUpDown size={16} />
      <b>Сортировка</b>
      <b className="text-primary">популярное</b>
    </div>
  );
};
