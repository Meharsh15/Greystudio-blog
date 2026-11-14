import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://blog.greystudio.online",
  integrations: [sitemap()],
  trailingSlash: "always"
});
