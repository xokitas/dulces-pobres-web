import type { Product } from "./types";

export const CATEGORIES = [
  "Todos",
  "Cakes",
  "Bombazos",
  "Postres",
  "Especiales",
] as const;

export const products: Product[] = [
  {
    id: "cake-chocolate",
    name: "Cake de Chocolate",
    category: "Cakes",
    description: "Húmedo, intenso y lleno de sabor.",
    price: 550,
    status: "Disponible",
    image: "/images/1.jpg",
  },
  {
    id: "bombazos-chocolate",
    name: "Bombazos de Chocolate",
    category: "Bombazos",
    description: "Bocados irresistibles rellenos de amor.",
    price: 250,
    status: "Disponible",
    image: "/images/2.jpg",
  },
  {
    id: "tres-leches",
    name: "Tres Leches",
    category: "Postres",
    description: "Clásico, suave y perfecto.",
    price: 450,
    status: "Disponible",
    image: "/images/3.jpg",
  },
  {
    id: "cheesecake-frutas",
    name: "Cheesecake de Frutas",
    category: "Postres",
    description: "Fresco, cremoso y frutal.",
    price: 300,
    status: "Agotado",
    image: "/images/4.jpg",
  },
];