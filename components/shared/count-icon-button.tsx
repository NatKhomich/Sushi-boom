import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { CountButtonProps } from "./count-button";
import { Minus, Plus } from "lucide-react";

interface Props {
  disabled?: boolean;
  type?: "plus" | "minus";
  onClick?: () => void;
}

export const CountIconButton = ({ disabled, type, onClick }: Props) => {
  return (
    <Button
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400",
        "w-[30px] h-[30px] rounded-[10px]"
      )}
    >
      {type === "plus" ? (
        <Plus className={"h-4"} />
      ) : (
        <Minus className={"h-4"} />
      )}
    </Button>
  );
};
