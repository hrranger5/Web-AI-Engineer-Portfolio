import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, (process as any).cwd(), '');

  // API key must be obtained exclusively from environment variables
  const apiKey = env.API_KEY;

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    define: {
      // Stringify the key to ensure it is embedded correctly as a string literal
      'process.env.API_KEY': JSON.stringify(apiKey),
    },
  };
});
