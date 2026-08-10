export default function OpeningHours() {
  const rowStyle = "flex justify-between border-b-2  border-dleite";
  return (
    <div className="flex flex-col    items-center ">
      {" "}
      <h1 className="font-semibold text-2xl text-shadow-sm  text-dtext">
        Nuestros Horarios
      </h1>
      <div className="h-full w-full border border-dtext ">
        <h1 className={rowStyle}>
          Lunes
          <span className="text-red-700">Cerrado</span>
        </h1>
        <h1 className={rowStyle}>Martes</h1>
        <h1 className="">Miercoles</h1>
      </div>
    </div>
  );
}
