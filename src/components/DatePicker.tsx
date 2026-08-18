"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { getMonthMatrix, toISODate, isSameDay, isBeforeDay } from "@/lib/date";

const WEEKDAY_LABELS = ["L", "M", "M", "J", "V", "S", "D"];
const MONTH_LABELS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

interface DatePickerProps {
  value: string;
  onChange: (isoDate: string) => void;
}

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const selectedDate = new Date(`${value}T00:00:00`);
  const [viewDate, setViewDate] = useState(selectedDate);
  const containerRef = useRef<HTMLDivElement>(null);
  const today = new Date();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cells = getMonthMatrix(viewDate);
  const monthLabel = `${MONTH_LABELS[viewDate.getMonth()]} ${viewDate.getFullYear()}`;
  const displayLabel = selectedDate.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  function selectDay(day: Date) {
    onChange(toISODate(day));
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center gap-2 rounded-full border border-cacao/15 bg-white px-4 py-3 text-left text-cacao outline-none focus:border-rosa"
      >
        <Calendar className="h-4 w-4 shrink-0 text-cacao/50" />
        <span className="truncate text-sm capitalize">{displayLabel}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-20 mt-2 w-72 rounded-organico bg-white p-4 shadow-suave"
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))
                }
                className="flex h-7 w-7 items-center justify-center rounded-full text-cacao/60 hover:bg-beige"
                aria-label="Mes anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-display text-sm capitalize text-cacao">{monthLabel}</span>
              <button
                type="button"
                onClick={() =>
                  setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
                }
                className="flex h-7 w-7 items-center justify-center rounded-full text-cacao/60 hover:bg-beige"
                aria-label="Mes siguiente"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-cacao/40">
              {WEEKDAY_LABELS.map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-1">
              {cells.map((day, i) => {
                if (!day) return <span key={i} />;
                const disabled = isBeforeDay(day, today);
                const selected = isSameDay(day, selectedDate);
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={disabled}
                    onClick={() => selectDay(day)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors ${
                      selected
                        ? "bg-rosa text-cacao"
                        : disabled
                        ? "cursor-not-allowed text-cacao/20"
                        : "text-cacao hover:bg-beige"
                    }`}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}