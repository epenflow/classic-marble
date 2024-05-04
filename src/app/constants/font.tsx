import local from 'next/font/local';
const hendangan = local({
	src: [
		{
			path: '../fonts/Hendangan.ttf',
		},
	],
	variable: '--font-hendangan',
});

const newyork = local({
	src: [
		{
			path: '../fonts/NewYork.otf',
		},
	],
	variable: '--font-newyork',
});

const lovera = local({
	src: [
		{
			path: '../fonts/Lovera.otf',
		},
	],
	variable: '--font-lovera',
});
export { hendangan, newyork, lovera };
