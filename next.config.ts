import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Desactiva la optimización nativa para que no intente usar sharp
  images: {
    unoptimized: true,
  },
  // Le indica a Next.js que sharp es un paquete externo de servidor y no debe empaquetarse
  serverExternalPackages: ["sharp"],
  
  // Silencia la advertencia de Next.js 16 para Turbopack
  turbopack: {
    resolveAlias: {
      sharp: "node_modules/@opennextjs/cloudflare/dist/adapters/empty-module.js",
    },
  },
};

export default nextConfig;