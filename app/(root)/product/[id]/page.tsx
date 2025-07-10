import { Container } from "@/components/shared";
import { ProductDetailsForm } from "@/components/shared/product-details-form";
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
    include: {
      category: {
        include: {
          products: {
            include: {
              items: true,
            }
          }
        }
      },
      items: true
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex gap-20 justify-center my-10">
      <ProductDetailsForm product={product} />
    </Container>
  );
}
