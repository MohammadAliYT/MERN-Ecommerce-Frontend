import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".json"], // Add '.jsx' to the extensions array
  },
  server: {
    proxy: {
      "/api": "http://localhost:4000/", // the address that u serve in the backend
    },
  },
});
