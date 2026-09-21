// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site uses `/jbasanicompany`. For local dev, `npm run dev` sets `ASTRO_DEV_BASE=1`
// so `http://localhost:4321/careers` works without the `/jbasanicompany` prefix (see package.json).
const base = process.env.ASTRO_DEV_BASE === '1' ? '/' : '/jbasanicompany';

// https://astro.build/config
export default defineConfig({
	site: 'https://nithin903.github.io',
	base,
	vite: {
		plugins: [tailwindcss()],
	},
});
