import {
  Container,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";
export interface Item {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
}

const items: Item[] = [
  {
    id: "4",
    name: "Филадельфия",
    price: 350,
    imageUrl:
      "https://static.tildacdn.com/stor3266-3237-4461-b138-363734313739/16114379.jpg",
  },
  {
    id: "1",
    name: "Филадельфия",
    price: 350,
    imageUrl:
      "https://static.tildacdn.com/stor3266-3237-4461-b138-363734313739/16114379.jpg",
  },
  {
    id: "2",
    name: "Филадельфия",
    price: 350,
    imageUrl:
      "https://static.tildacdn.com/stor3266-3237-4461-b138-363734313739/16114379.jpg",
  },
  {
    id: "3",
    name: "Филадельфия",
    price: 350,
    imageUrl:
      "https://static.tildacdn.com/stor3266-3237-4461-b138-363734313739/16114379.jpg",
  },
];

export default function Home() {
  return (
    <Container className="mt-5">
      <Title size="md" className="font-extrabold ">
        Все товары
      </Title>

      <TopBar />

      <ProductsGroupList items={items} title="Роллы" />
    </Container>
  );
}
