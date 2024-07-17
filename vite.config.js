import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all addresses, including local network
    port: 3000, // Specify the port
    open: false, // Prevent auto-opening browser
  },
});