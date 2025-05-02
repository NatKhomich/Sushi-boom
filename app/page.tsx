import {
  Container,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma";
export interface Item {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
}

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
        },
      },
    },
  });

  return (
    <Container className="mt-5">
      <Title size="md" className="font-extrabold ">
        Все товары
      </Title>

      <TopBar categories={categories} />

      {categories.map((category) => (
        <ProductsGroupList
          key={category.id}
          categoryId={category.id}
          title={category.name}
          items={category.products}
        />
      ))}
    </Container>
  );
}
