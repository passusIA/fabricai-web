import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Rutas renombradas en el rediseño (308 permanente, equivalente SEO a 301).
      { source: "/servicios", destination: "/que-fabricamos", permanent: true },
      { source: "/proceso", destination: "/como-trabajamos", permanent: true },
      { source: "/nosotros", destination: "/la-fabrica", permanent: true },
    ];
  },
};

export default nextConfig;
