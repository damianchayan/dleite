import { Dictionary } from "@/lib/getDictionaries";
import InstagramButton from "./InstagramButton";
import WhatsappButton from "./WhatsAppButton";
interface SocialsProps {
  dict: Dictionary;
}
export default function Socials({ dict }: SocialsProps) {
  return (
    <div
      className={`fixed flex flex-col gap-2.5 right-4 bottom-2 z-50 sm:right-6 sm:bottom-8  `}
    >
      <InstagramButton text={dict.UI.instagram} />
      <WhatsappButton text={dict.UI.whatsapp} />
    </div>
  );
}
