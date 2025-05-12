"use client";

import { cn } from "@/lib/utils";

interface Variant {
  name: string;
  value: string;
  disabled?: boolean;
}

interface Props {
  items: Variant[];
  selectedValue: string;
  onChangeVariant?: (value: string) => void;
  className?: string;
}

export const ProductVariants = ({
  items,
  selectedValue,
  onChangeVariant,
  className,
}: Props) => {

  return (
    <div
      className={cn(
        "flex justify-between rounded-3xl p-1 select-none bg-primary/10 w-[100%]",
        className
      )}
    >
      {items.map((item) => (
        <button
          key={item.value}
          className={cn(
            "flex items-center justify-center flex-1 h-[30px] px-5 py-2 rounded-3xl cursor-pointer transition-all duration-400 text-sm",
            {
              "bg-primary/70 text-white": selectedValue === item.value,
              "text-gray-500": item.disabled,
            }
          )}
          onClick={() =>
            !item.disabled && onChangeVariant && onChangeVariant(item.value)
          }
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
