import clsx from "clsx";
import React from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  size?: TitleSize;
  className?: string;
  children: React.ReactNode;
}

export const Title = ({ size = "sm", className, children }: Props) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  } as const;

  const mapClassNameBySize = {
    xs: "text-[16px]",
    sm: "text-[22px]",
    md: "text-[26px]",
    lg: "text-[32px]",
    xl: "text-[40px]",
    "2xl": "text-[48px]",
  } as const;

  const Tag = mapTagBySize[size];

  return (
    <Tag className={clsx(mapClassNameBySize[size], className)}>{children}</Tag>
  );
};
