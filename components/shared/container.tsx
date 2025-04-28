import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("mx-auto max-w-[1280px] px-2", className)}>{children}</div>
  );
};