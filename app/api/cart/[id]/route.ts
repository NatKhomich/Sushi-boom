import { updateCartTotalPrice } from "@/lib";
import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const data = (await request.json()) as { quantity: number };
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Токен не предоставлен" },
        { status: 401 }
      );
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: +id,
      },
    });
    if (!cartItem) {
      return NextResponse.json(
        { message: "Товар не найден в корзине" },
        { status: 404 }
      );
    }

    await prisma.cartItem.update({
      where: {
        id: +id,
      },
      data: {
        quantity: data.quantity,
      },
    });

    const updatedCart = await updateCartTotalPrice(token);

    if (!updatedCart) {
      return NextResponse.json(
        { message: "Корзина не найдена" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedCart);
  } catch (error) {
    console.log("[CART PATCH ERROR]", error);
    return NextResponse.json(
      { message: "Ошибка при обновлении корзины" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = +params.id;
    const token = request.cookies.get("token")?.value;

    console.log("[CART DELETE]", { id, token });

    if (!token) {
      return NextResponse.json(
        { message: "Токен не предоставлен" },
        { status: 401 }
      );
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { error: "Товар не найден в корзине" },
        { status: 404 }
      );
    }

    await prisma.cartItem.delete({
      where: {
        id,
      },
    });

    const updatedCart = await updateCartTotalPrice(token);

    if (!updatedCart) {
      return NextResponse.json(
        { message: "Корзина не найдена" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedCart);
  } catch (error) {
    console.log("[CART DELETE ERROR]", error);
    return NextResponse.json(
      { message: "Ошибка при удалении товара из корзины" },
      { status: 500 }
    );
  }
}
