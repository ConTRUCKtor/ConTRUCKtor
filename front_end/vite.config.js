import solid from "solid-start/vite";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [
    solid({
      ssr: false,
    }),
  ],
  server: {
    host: true,
    port: 8000
  }
});
