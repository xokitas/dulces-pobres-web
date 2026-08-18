"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";
import { formatOrderTime } from "@/lib/whatsapp";

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
}

function generateSlots() {
  const slots: string[] = [];
  for (let hour = 8; hour <= 20; hour++) {
    for (const minute of [0, 30]) {
      if (hour === 20 && minute === 30) continue;
      slots.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`);
    }
  }
  return slots;
}

const SLOTS = generateSlots();

export default function TimePicker({ value, onChange }: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectSlot(slot: string) {
    onChange(slot);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center gap-2 rounded-full border border-cacao/15 bg-white px-4 py-3 text-left text-cacao outline-none focus:border-rosa"
      >
        <Clock className="h-4 w-4 shrink-0 text-cacao/50" />
        <span className="truncate text-sm">
          {value ? formatOrderTime(value) : "Elegir hora"}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-20 mt-2 max-h-56 w-44 overflow-y-auto rounded-organico bg-white p-2 shadow-suave"
          >
            {SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => selectSlot(slot)}
                className={`w-full rounded-full px-4 py-2 text-left text-sm transition-colors ${
                  slot === value ? "bg-rosa text-cacao" : "text-cacao/70 hover:bg-beige"
                }`}
              >
                {formatOrderTime(slot)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}