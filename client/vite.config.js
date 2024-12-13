import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://full-stack-hotel-booking-app-eosin.vercel.app/",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
