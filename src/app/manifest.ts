import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Júlio Santos | Dev Full Stack & DevOps",
    short_name: "Júlio Santos",
    description: "Portfólio profissional de Júlio Santos. Desenvolvedor Full Stack e DevOps, unindo precisão técnica com uma visão humana da Psicologia.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#5b21b6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
