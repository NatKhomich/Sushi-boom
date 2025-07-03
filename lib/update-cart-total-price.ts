import { prisma } from "@/prisma/prisma";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export const updateCartTotalPrice = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      OR: [
        {
          token,
        },
      ],
    },
    include: {
      items: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });

  if (!userCart) {
    return;
  }

  const totalPrice =
    userCart?.items.reduce((acc, item) => {
      return acc + calcCartItemTotalPrice(item);
    }, 0) || 0;

  return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalPrice,
    },

    include: {
      items: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });
};
