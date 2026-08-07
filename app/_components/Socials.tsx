import InstagramButton from "./InstagramButton";
import WhatsappButton from "./WhatsAppButton";

export default function Socials() {
  return (
    <div className={`fixed flex flex-col gap-2.5 right-0 bottom-0 z-50 p-6`}>
      <InstagramButton />
      <WhatsappButton />
    </div>
  );
}
