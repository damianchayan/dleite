import { Dictionary } from "@/lib/getDictionaries";

interface OpeningHoursProps {
  dict: Dictionary["Schedule"];
}

export default function OpeningHours({ dict }: OpeningHoursProps) {
  const rowStyle = "flex justify-between border-b-2 border-dleite py-2 px-4";

  const scheduleItems = [
    { day: dict.monday, hours: dict.closed },
    { day: dict.tuesday, hours: "9:00 - 15:00" },
    { day: dict.wednesday, hours: "9:00 - 15:00" },
    { day: dict.thursday, hours: "9:00 - 15:00" },
    { day: dict.friday, hours: "9:00 - 15:00" },
    { day: dict.saturday, hours: "9:00 - 15:00" },
    { day: dict.sunday, hours: "10:00 - 14:00" },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-md ">
      <h2 className="font-semibold text-2xl text-shadow-sm text-dtext mb-1">
        {dict.title}
      </h2>
      <p className="text-xs text-gray-500 mb-4 font-semibold tracking-wider uppercase">
        {dict.type}
      </p>

      <div className="h-auto w-full border border-dtext rounded-lg overflow-hidden shadow-md bg-white">
        <ul className="flex flex-col">
          {scheduleItems.map((item, index) => {
            const isClosed = item.hours === dict.closed;

            return (
              <li key={index} className={rowStyle}>
                <span className="font-medium text-gray-800">{item.day}</span>
                <span
                  className={
                    isClosed ? "text-red-700 font-semibold" : "text-gray-600"
                  }
                >
                  {item.hours}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="bg-green-50 p-3 text-center border-t border-dleite">
          <p className="text-xs font-bold text-dtext uppercase">
            {dict.special}
          </p>
          <p className="text-sm text-gray-700 font-medium">
            9:00 a 14:00 y 18:00 a 21:00
          </p>
        </div>
      </div>
    </div>
  );
}
