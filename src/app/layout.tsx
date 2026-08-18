import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dulces de Pobre",
  description:
    "Hacemos dulces con las manos, para que te los comas con el corazón. Repostería artesanal cubana.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}