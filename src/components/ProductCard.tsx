import { Heart } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const agotado = product.status === "Agotado";
  const { addItem } = useCart();

  return (
<div className="group relative overflow-hidden rounded-organico bg-white shadow-suave transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">      <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
        <Heart className="h-4 w-4 text-cacao/40" />
      </div>

      {/* 📸 Contenedor de la foto del producto */}
      <div className="relative h-72 w-full overflow-hidden bg-beige/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {agotado && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-negro/80 px-3 py-1 font-body text-xs font-medium text-harina">
          Agotado
        </span>
      )}

      <div className="p-5">
        <h3 className="font-display text-lg text-cacao">{product.name}</h3>
        <p className="mt-1 text-sm text-cacao/60">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-xl text-cacao">
            ${product.price}
          </span>

          <button
            type="button"
            disabled={agotado}
            onClick={() => addItem(product)}
            className="inline-flex items-center gap-2 rounded-full bg-rosa px-5 py-2.5 font-body text-sm font-medium text-cacao transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-beige disabled:text-cacao/40 disabled:hover:scale-100"
          >
            {agotado ? "Agotado" : "Lo quiero"}
          </button>
        </div>
      </div>
    </div>
  );
}