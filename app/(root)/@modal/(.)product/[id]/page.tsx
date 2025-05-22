import { ProductModal } from "@/components/shared";
import { prisma } from "@/prisma/prisma";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findFirst({
    where: { id: +id },
    include: {
      items: true,
    },
  });
  if (!product) {
    return notFound();
  }

  return <ProductModal product={product} />;
}
