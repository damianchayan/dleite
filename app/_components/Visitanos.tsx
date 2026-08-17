import { Dictionary } from "@/lib/getDictionaries";
import LocationMap from "../[locale]/about/LocationMap";
import { Info } from "./Info";
import InstagramButton from "./InstagramButton";
import WhatsappButton from "./WhatsAppButton";

interface VisitanosProps {
  id: string;
  dict: Dictionary;
}

export default function Visitanos({ id, dict }: VisitanosProps) {
  return (
    <section id={id} className="xl:px-48  md:px-24 px-12 ">
      <Info>
        <Info.Details>
          <Info.Title>{id.toUpperCase()}</Info.Title>
          <Info.Address>
            Something Something <br /> somethin
          </Info.Address>
          <Info.Phone>+34 numbernumber</Info.Phone>
          <Info.Actions>
            <InstagramButton dotType={false} text={dict.UI.instagram} />
            <WhatsappButton dotType={false} text={dict.UI.whatsapp} />
          </Info.Actions>
        </Info.Details>
        <Info.Map>
          <LocationMap />
        </Info.Map>
      </Info>
    </section>
  );
}
