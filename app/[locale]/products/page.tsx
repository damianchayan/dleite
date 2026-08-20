import { formatId } from "@/lib/formatters";
import { getDictionary } from "../../../lib/getDictionaries";

import Menu from "./Menu";
import {
  buildEmpanadasData,
  buildOtrosData,
  buildTartasData,
} from "./data/MenuData";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "es" | "gl" }>;
}) {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  return (
    <div className="xl:px-48  md:px-24 px-12 pt-10 ">
      <h1 className="sr-only">{dict.Navigation.products}</h1>
      <Menu
        id={formatId(dict.Menu.tartas.title)}
        title={dict.Menu.tartas.title}
        subcategories={buildTartasData(dict)}
      />

      <Menu
        id={formatId(dict.Menu.empanadas.title)}
        title={dict.Menu.empanadas.title}
        subcategories={buildEmpanadasData(dict)}
      />

      <Menu
        id={formatId(dict.Menu.otros.title)}
        title={dict.Menu.otros.title}
        subcategories={buildOtrosData(dict)}
      />
    </div>
  );
}
