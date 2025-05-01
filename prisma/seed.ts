import { categories, products } from "./constants";
import { prisma } from "./prisma";
import { hashSync } from "bcrypt";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        name: "John User",
        email: "user@test.com",
        password: hashSync("123456", 10),
        role: "USER",
        verified: new Date(),
      },
      {
        name: "John Doe",
        email: "admin@test.com",
        password: hashSync("12345678", 10),
        role: "ADMIN",
        verified: new Date(),
      },
    ],
  });

  await prisma.category.createMany({ data: categories });

  await prisma.product.createMany({ data: products });

  const dbProducts = await prisma.product.findMany();

  const productItems = dbProducts.flatMap((product) => {
    if (product.categoryId === 1) {
      return [
        {
          name: `${product.name} (4 шт.)`,
          size: 4,
          price: getPrice(product.name, 4),
          productId: product.id,
        },
        {
          name: `${product.name} (8 шт.)`,
          size: 8,
          price: getPrice(product.name, 8),
          productId: product.id,
        },
      ];
    } else {
      return [
        {
          name: product.name,
          price: getPrice(product.name),
          productId: product.id,
        },
      ];
    }
  });

  await prisma.productItem.createMany({
    data: productItems,
  });
}

async function down() {
  await prisma.user.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.productItem.deleteMany({});
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

function getPrice(name: string, size?: number): number {
  const basePrices: Record<string, { 4: number; 8: number }> = {
    "Филадельфия Сашими": { 4: 230, 8: 410 },
    "Филадельфия с угрем": { 4: 240, 8: 430 },
    Токио: { 4: 250, 8: 440 },
    Бермуды: { 4: 220, 8: 400 },
    "Филадельфия классик": { 4: 230, 8: 420 },
    Канада: { 4: 235, 8: 430 },
    Калифорния: { 4: 220, 8: 390 },
    Микки: { 4: 240, 8: 400 },
    "Фила запечёная": { 4: 260, 8: 450 },
    Блэк: { 4: 210, 8: 380 },
    "Креветка чили": { 4: 210, 8: 440 },
    "Инь и Янь": { 4: 210, 8: 370 },
    Ливерпуль: { 4: 240, 8: 410 },
    "Лосось темпура": { 4: 250, 8: 430 },
    "Сяке Темпура": { 4: 240, 8: 440 },
  };

  if (size && basePrices[name]) {
    return basePrices[name][size as 4 | 8];
  }

  const fallbackPrices: Record<string, number> = {
    "Кольца кальмара": 300,
    "Креветки темпура": 340,
    "Салат чука": 250,

    "Rich Биттер": 100,
    "Палпи Апельсин": 120,
    "Чай Rich зеленый с манго": 150,
    "Чай Rich черный с лимоном": 130,

    "Сет Любимый 40шт": 1540,
    "Сет Запеченый 32 шт": 1390,
    "Сет Мега 56 шт": 1990,
    "Много лосося 20 шт": 1460,
  };

  return fallbackPrices[name] || 200;
}
