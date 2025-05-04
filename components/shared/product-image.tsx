import { cn } from "@/lib/utils";

interface Props {
  imageUrl: string;
  className?: string;
}

export const ProductImage = ({ imageUrl, className }: Props) => {
  return (
    <div className={cn("max-w-[300px]", className)}>
      <img
        src={imageUrl || "/image-not-available.png"}
        alt="product"
        className="max-w-full max-h-full object-cover rounded-md"
      />
    </div>
  );
};
