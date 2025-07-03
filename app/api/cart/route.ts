import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { findOrCreateCart, updateCartTotalPrice } from "@/lib";
import { CreateCartItem } from "@/services/dto/cart.dto";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ totalPrice: 0, items: [] });
    }
    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ token }],
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
    return NextResponse.json(userCart);
  } catch (error) {
    console.log("[CART GET ERROR]", error);
    return NextResponse.json(
      { message: "Не удалось получить корзину" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("token")?.value;

    if (!token) {
      token = crypto.randomUUID();
    }
    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartItem;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
      },
    });

    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          quantity: 1,
        },
      });
    }

    const updatedCart = await updateCartTotalPrice(token);
    if (!updatedCart) {
      return NextResponse.json(
        { message: "Корзина не найдена" },
        { status: 404 }
      );
    }
    const res = NextResponse.json(updatedCart);
    res.cookies.set("token", token);
    return res;
  } catch (error) {
    console.log("[CART POST ERROR]", error);
    return NextResponse.json(
      { error: "Не удалось добавить товар в корзину" },
      { status: 500 }
    );
  }
}
