import Card from "./Card";

import { SubCategory } from "./data/MenuData";

interface MenuProps {
  id: string;
  name: string;
  data: SubCategory[];
}

export default function Menu({ name, id, data }: MenuProps) {
  return (
    <>
      <h1
        id={id}
        className="text-dtext font-bold text-5xl mb-10   scroll-mt-9 md:mt-10  text-shadow-sm "
      >
        {name}
      </h1>

      <ul className="grid  grid-cols-1 gap-10 mb-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data.map((sub) =>
          sub.items.map((item, index) => (
            <Card
              key={index}
              title={item.name}
              description={item.description}
              price={item.price}
            />
          )),
        )}
      </ul>
    </>
  );
}
