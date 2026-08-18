import type { CartItem } from "./cart-context";
import type { OrderFormData } from "./types";

const CATEGORY_EMOJI: Record<string, string> = {
  Cakes: "🎂",
  Bombazos: "🍫",
  Postres: "🍮",
  Especiales: "✨",
};

export function formatOrderDate(isoDate: string) {
  if (!isoDate) return "";
  const date = new Date(`${isoDate}T00:00:00`);
  const formatted = date.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatOrderTime(time: string) {
  if (!time) return "";
  const [hoursStr, minutes] = time.split(":");
  const hours = Number(hoursStr);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = ((hours + 11) % 12) + 1;
  return `${displayHours}:${minutes} ${period}`;
}

export function buildCartOrderMessage(items: CartItem[], form: OrderFormData) {
  const productLines = items.map(
    (item) =>
      `${CATEGORY_EMOJI[item.product.category] ?? "🍰"} ${item.product.name} x${item.quantity}`
  );

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const lines = [
    "Hola.",
    "",
    "Quisiera realizar el siguiente pedido.",
    "",
    ...productLines,
    "",
    `Subtotal: $${subtotal}`,
    "",
    "Nota: el envío a domicilio tiene un costo aparte según la zona, me confirman por aquí.",
    "",
    `Nombre: ${form.name}`,
    `Teléfono: ${form.phone}`,
    `Dirección de entrega: ${form.address}`,
    `Fecha deseada: ${formatOrderDate(form.date)}`,
    `Hora aproximada: ${formatOrderTime(form.time)}`,
  ];

  return lines.join("\n");
}

export function buildWhatsAppLink(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}