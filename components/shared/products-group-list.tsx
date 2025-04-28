import { Item } from "@/app/page";
import { ProductCard } from "./product-card";
import { Title } from "./title";
import { cn } from "@/lib/utils";

interface Props {
  items: Item[];
  title: string;
  className?: string;
}

export const ProductsGroupList = ({ items, title, className }: Props) => {
  return (
    <div className={className}>
      <Title size="md" className="font-extrabold mb-5">
        {" "}
        {title}
      </Title>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {items.map((i) => (
          <ProductCard key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
};
