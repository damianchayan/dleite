export const formatId = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD") // Separa los acentos de las letras (ej. á -> a + ´)
    .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
    .replace(/\s+/g, "-"); // Cambia los espacios por guiones
};
