<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
});
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
});
>>>>>>> 84af93a0e12e13b51698dacc57778b2069b8163f
