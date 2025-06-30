import Card from "./Card";

export default function CardList({ items }) {
  return items.map((item) => <Card key={item.name} item={item} />);
}
