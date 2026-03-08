import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    // SSRモードを有効化
    output: "server",
    adapter: cloudflare({
        platformProxy: { enabled: true },
    }),
    integrations: [solidJs()],
    vite: {
        plugins: [tailwindcss()],
    },
});
