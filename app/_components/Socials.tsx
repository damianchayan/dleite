import InstagramButton from "./InstagramButton";
import WhatsappButton from "./WhatsAppButton";

export default function Socials() {
  return (
    <div
      className={`fixed flex flex-col gap-2.5 right-4 bottom-2 z-50 sm:right-6 sm:bottom-8  `}
    >
      <InstagramButton />
      <WhatsappButton />
    </div>
  );
}
