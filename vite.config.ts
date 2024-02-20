import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'node:url';
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		open: true,
		host: 'http://127.0.0.1',
		port: 3000
	},
	plugins: [react(), qrcode()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});
