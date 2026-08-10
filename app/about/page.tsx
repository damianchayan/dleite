import LocationMap from "./LocationMap";
import OpeningHours from "./OpeningHours";

function Page() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-3 ">
      <OpeningHours />

      <div className=" md:col-span-2  ">
        <LocationMap />
      </div>
    </div>
  );
}

export default Page;
