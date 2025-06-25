import { cn } from "@/lib/utils";

interface Props {
  name: string;
  description: string;
  size: number | null;
  className?: string;
}

export const CartItemInfo = ({ name, description, size, className }: Props) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      <p className="text-xs text-gray-400">{size ? `${size} шт` : description}</p>
    </div>
  );
};
