"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { buildCartOrderMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import type { OrderFormData } from "@/lib/types";
import OrderForm from "./OrderForm";

type Step = "cart" | "form" | "sent";

export default function CartWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("cart");
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();

  function closePanel() {
    setOpen(false);
    setStep("cart");
  }

  function handleFormSubmit(data: OrderFormData) {
    const message = buildCartOrderMessage(items, data);
    const link = buildWhatsAppLink(WHATSAPP_NUMBER, message);
    window.open(link, "_blank", "noopener,noreferrer");
    clearCart();
    setStep("sent");
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        animate={{ scale: totalItems > 0 ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-rosa shadow-suave"
        aria-label="Ver mi pedido"
      >
        <ShoppingBag className="h-6 w-6 text-cacao" />
        {totalItems > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-cacao font-body text-xs font-bold text-harina">
            {totalItems}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePanel}
              className="fixed inset-0 z-50 bg-negro/50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-harina p-6 shadow-suave"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl text-cacao">
                  {step === "cart" && "Mi pedido"}
                  {step === "form" && "Datos de entrega"}
                  {step === "sent" && "¡Listo!"}
                </h2>
                <button type="button" onClick={closePanel} aria-label="Cerrar">
                  <X className="h-6 w-6 text-cacao/60" />
                </button>
              </div>

              {step === "cart" && (
                <>
                  <div className="mt-6 flex-1 overflow-y-auto">
                    {items.length === 0 ? (
                      <p className="text-cacao/60">Todavía no has agregado nada.</p>
                    ) : (
                      <ul className="flex flex-col gap-4">
                        {items.map((item) => (
                          <li
                            key={item.product.id}
                            className="flex items-center gap-4 rounded-organico bg-beige/40 p-4"
                          >
                            <div className="flex-1">
                              <p className="font-display text-cacao">{item.product.name}</p>
                              <p className="text-sm text-cacao/60">${item.product.price} c/u</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-cacao"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="w-5 text-center text-sm text-cacao">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-cacao"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.product.id)}
                              aria-label={`Quitar ${item.product.name}`}
                            >
                              <Trash2 className="h-4 w-4 text-cacao/40 transition-colors hover:text-rosa-fuerte" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {items.length > 0 && (
                    <div className="mt-6 border-t border-cacao/10 pt-6">
                      <div className="flex items-center justify-between font-display text-lg text-cacao">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep("form")}
                        className="mt-4 w-full rounded-full bg-cacao px-8 py-4 font-body text-sm font-medium text-harina"
                      >
                        Continuar pedido
                      </button>
                    </div>
                  )}
                </>
              )}

              {step === "form" && (
                <OrderForm onSubmit={handleFormSubmit} onBack={() => setStep("cart")} />
              )}

              {step === "sent" && (
                <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
                  <p className="font-display text-xl text-cacao">Solicitud enviada</p>
                  <p className="leading-relaxed text-cacao/70">
                    Te confirmamos por WhatsApp en cuanto la repostera vea tu mensaje.
                  </p>
                  <button
                    type="button"
                    onClick={closePanel}
                    className="rounded-full bg-rosa px-8 py-4 font-body text-sm font-medium text-cacao"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}