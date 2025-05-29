"use client";

import { cn } from "@/lib/utils";
import { CountIconButton } from "./count-icon-button";

export interface CountButtonProps {
  value?: number;
  className?: string;
  onClick?: (type: "plus" | "minus") => void;
}

export const CountButton = ({
  className,
  onClick,
  value = 1,
}: CountButtonProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-3",
        className
      )}
    >
      <CountIconButton
        onClick={() => onClick?.("minus")}
        disabled={value === 1}
        type="minus"
      />

      <b>{value}</b>

      <CountIconButton onClick={() => onClick?.("plus")} type="plus" />
    </div>
  );
};
