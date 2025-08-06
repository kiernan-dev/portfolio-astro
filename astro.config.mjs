import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import netlify from "@astrojs/netlify";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  integrations: [react(), tailwind(), compress()],
  // adapter: netlify()
});