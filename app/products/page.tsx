import { menuData } from "./data/MenuData";
import Menu from "./Menu";

export default function Page() {
  const tartasData = menuData.find((cat) => cat.id === "tartas");
  if (!tartasData) {
    return <p>Category not found.</p>;
  }
  const empanadaData = menuData.find((cat) => cat.id === "empanadas");
  if (!empanadaData) {
    return <p>Category not found.</p>;
  }
  const otroData = menuData.find((cat) => cat.id === "otros");
  if (!otroData) {
    return <p>Category not found.</p>;
  }
  return (
    <>
      <Menu id="tartas" name="Tartas" data={tartasData?.subcategories} />
      <Menu
        id="empanadas"
        name="Empanadas"
        data={empanadaData?.subcategories}
      />
      <Menu id="otros" name="Otros" data={otroData?.subcategories} />
    </>
  );
}
