import { cn } from "@/lib/utils";

interface Props {
  name: string;
  className?: string;
}

export const CartItemInfo = ({ name, className }: Props) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      <p className="text-xs text-gray-400">если роллы то сколько штук</p>
      <p className="text-xs text-gray-400">можно указать description</p>
    </div>
  );
};
