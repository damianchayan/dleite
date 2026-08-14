export default function LocationMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023.036256528943!2d-8.649922583142452!3d42.431158649513975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f71e349006249%3A0x426f95c137fa9b0a!2sDLeite%20Bakery!5e0!3m2!1ses!2ses!4v1786104922386!5m2!1ses!2ses"
      className="w-full h-128 rounded-2xl shadow-lg"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
