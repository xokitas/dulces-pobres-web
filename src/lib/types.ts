export type ProductCategory = "Cakes" | "Bombazos" | "Postres" | "Especiales";
export type ProductStatus = "Disponible" | "Agotado";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  status: ProductStatus;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
}

export interface OrderFormData {
  name: string;
  phone: string;
  zone: string;
  date: string;
  time: string;
  notes: string;
}