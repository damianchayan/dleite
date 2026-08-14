import { getDictionary } from "@/lib/getDictionaries";
import LocationMap from "./LocationMap";
import OpeningHours from "./OpeningHours";

async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "es" | "gl" }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-3 xl:px-48  md:px-24 px-12 pt-10  ">
      <OpeningHours dict={dictionary.Schedule} />

      <div className=" md:col-span-2  ">
        <LocationMap />
      </div>
    </div>
  );
}

export default Page;
