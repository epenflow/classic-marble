import { lovera } from '@/app/constants/font';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				marble: {
					white: '#D1CFCA',
					blue: '#2C3C6D',
					gold: '#FFD700',
				},
			},
			fontFamily: {
				hendangan: ['var(--font-hendangan)'],
				newyork: ['var(--font-newyork)'],
				lovera: ['var(--font-lovera)'],
			},
		},
	},
	plugins: [],
};
export default config;
