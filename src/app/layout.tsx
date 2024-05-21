import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { hendangan, lovera, newyork } from './constants/font';
import { BRIDE_BIODATA, GROOM_BIODATA } from './constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: `${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`,
	icons: {
		icon: {
			url: '/WEDDING ICON.svg',
		},
	},
	description:
		'Atas asung kerta wara nugraha Ida Sang Hyang Widhi Wasa, kami sekeluarga bermaksud menyelenggarakan upacara manusia yadnya Pawiwahan/Pernikahan Putra - Putri kami.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} ${hendangan.variable}  ${newyork.variable} ${lovera.variable}`}>
				{children}
			</body>
		</html>
	);
}
