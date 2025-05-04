import { Container, ProductImage, Title } from "@/components/shared";
import { ProductVariants } from "@/components/shared/product-variants";
import { prisma } from "@/prisma/prisma";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: { id: +id },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex gap-20 justify-center my-10">
    
        <ProductImage imageUrl={product.imageUrl} />

        <div className="w-[400px] bg-primary/5 rounded-md p-7">
          <Title>{product.name}</Title>

          <p className="text-gray-400">{product.description}</p>

          <ProductVariants
            items={[
              { name: "4шт", value: "1" },
              { name: "8шт", value: "2" },
            ]}
            selectedValue="1"
            className="mt-5"
          />
        </div>
   
    </Container>
  );
}
