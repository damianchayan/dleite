import { Card } from "../../_components/Card";

// 1. Tipos súper simples, cero genéricos
interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

interface MenuSubcategory {
  title: string;
  items: MenuItem[];
}

interface MenuProps {
  id: string;
  title: string;
  subcategories: MenuSubcategory[];
}

export default function Menu({ id, title, subcategories }: MenuProps) {
  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="text-dtext font-bold text-5xl mb-10 scroll-mt-9 md:mt-10 text-shadow-sm"
      >
        {title}
      </h2>

      <ul className="grid grid-cols-1 gap-10 mb-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {subcategories.map((sub) =>
          sub.items.map((item, index) => (
            <Card key={`${sub.title}-${index}`}>
              <Card.Title>{item.name}</Card.Title>
              <Card.Description>{item.desc}</Card.Description>
              <Card.Price>{item.price}</Card.Price>
              <Card.Image src="/cinamon.jpg" alt="Tarta Tradicional" />
            </Card>
          )),
        )}
      </ul>
    </section>
  );
}
