import { CATEGORIES } from "@/lib/products";

interface CategoryFilterProps {
  active: (typeof CATEGORIES)[number];
  onChange: (category: (typeof CATEGORIES)[number]) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-full px-5 py-2.5 font-body text-sm font-medium transition-colors ${
              isActive
                ? "bg-rosa text-cacao"
                : "bg-beige/60 text-cacao/60 hover:bg-beige"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}