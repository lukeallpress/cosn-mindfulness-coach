import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` must match the GitHub Pages project sub-path so built asset URLs resolve.
// Repo name: cosn-mindfulness-coach -> https://<user>.github.io/cosn-mindfulness-coach/
// Applied only to production builds so local dev still serves from '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cosn-mindfulness-coach/' : '/',
  plugins: [react(), tailwindcss()],
}))
