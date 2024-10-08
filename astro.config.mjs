import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://flowwise.pages.github.io",
  base: "/fn-lp",
  integrations: [tailwind(), icon()]
});
