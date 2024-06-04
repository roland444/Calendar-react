import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@App': fileURLToPath(new URL('./src/views/App', import.meta.url))
		},
	},
})
