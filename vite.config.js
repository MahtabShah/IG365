import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/IG365/",  // Replace "IG365" with your GitHub repo name
});
