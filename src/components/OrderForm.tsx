"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { OrderFormData } from "@/lib/types";
import { DELIVERY_MUNICIPALITY } from "@/lib/config";
import { todayISO } from "@/lib/date";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";

interface OrderFormProps {
  onSubmit: (data: OrderFormData) => void;
  onBack: () => void;
}

export default function OrderForm({ onSubmit, onBack }: OrderFormProps) {
  const [form, setForm] = useState<OrderFormData>({
    name: "",
    phone: "",
    address: "",
    date: todayISO(),
    time: "",
  });
  const [timeTouched, setTimeTouched] = useState(false);

  function handleChange(field: keyof OrderFormData) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.time) {
      setTimeTouched(true);
      return;
    }
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-y-auto">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 self-start text-sm text-cacao/60 underline"
      >
        ← Volver al carrito
      </button>

      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm text-cacao">
          Nombre
          <input
            required
            value={form.name}
            onChange={handleChange("name")}
            className="rounded-full border border-cacao/15 bg-white px-4 py-3 text-cacao outline-none focus:border-rosa"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-cacao">
          Teléfono
          <input
            required
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
            className="rounded-full border border-cacao/15 bg-white px-4 py-3 text-cacao outline-none focus:border-rosa"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-cacao">
          Dirección de entrega
          <span className="text-xs font-normal text-cacao/50">
            Los domicilios son solo dentro del municipio de {DELIVERY_MUNICIPALITY}. Escribe la
            dirección exacta donde quieres recibir tu pedido.
          </span>
          <input
            required
            value={form.address}
            onChange={handleChange("address")}
            placeholder="Calle, número, reparto..."
            className="mt-1 rounded-full border border-cacao/15 bg-white px-4 py-3 text-cacao outline-none focus:border-rosa"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col gap-1 text-sm text-cacao">
            Fecha deseada
            <DatePicker
              value={form.date}
              onChange={(date) => setForm((prev) => ({ ...prev, date }))}
            />
          </label>

          <label className="flex flex-col gap-1 text-sm text-cacao">
            Hora aproximada
            <TimePicker
              value={form.time}
              onChange={(time) => {
                setForm((prev) => ({ ...prev, time }));
                setTimeTouched(true);
              }}
            />
            {timeTouched === false && (
              <span className="text-xs text-cacao/40">Toca para elegir</span>
            )}
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-cacao px-8 py-4 font-body text-sm font-medium text-harina"
      >
        Enviar solicitud por WhatsApp
      </button>
    </form>
  );
}