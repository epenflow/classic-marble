import React from 'react';
import { BRIDE_TEXT, GROOM_TEXT } from '../constants';
import Profile from '../components/Profile';
import Image from 'next/image';

const Biodata = () => {
	return (
		<section className='h-screen w-screen px-5 py-4 bg-marble-white flex flex-col gap-1.5 font-serif items-center relative'>
			<h1 className='font-newyork text-4xl z-10'>Om Swastiastu</h1>
			<p className='lg:w-1/2 text-center z-10'>
				Atas asung kerta wara nugraha Ida Sang Hyang Widhi Wasa, kami
				sekeluarga bermaksud menyelenggarakan upacara manusia yadnya
				Pawiwahan/Pernikahan Putra - Putri kami.
			</p>
			<div className='flex flex-col items-center w-full m-auto z-10'>
				<Profile
					name={GROOM_TEXT.name}
					text={GROOM_TEXT.text}
					address={GROOM_TEXT.address}
					father={GROOM_TEXT.father}
					mother={GROOM_TEXT.mother}
				/>
				<span className='font-newyork text-4xl lg:text-6xl'>&</span>
				<Profile
					name={BRIDE_TEXT.name}
					text={BRIDE_TEXT.text}
					address={BRIDE_TEXT.address}
					father={BRIDE_TEXT.father}
					mother={BRIDE_TEXT.mother}
				/>
			</div>
			<p className='lg:w-1/2 text-center z-10'>
				&quot; Ya Tuhan, anugerahkanlah kepada pasangan pengantin ini
				kebahagiaan, keduanya tiada terpisahkan dan panjang umur. Semoga
				penganten ini dianugerahkan putra dan cucu yang memberikan
				penghiburan, tinggal di rumah yang penuh kegembiraan. &quot;
				<br />- Rg Veda X.85.42 -
			</p>
			<Image
				src={'/japanese-rose.png'}
				alt='japanese-rose.png'
				width={500}
				height={500}
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50'
			/>
		</section>
	);
};

export default Biodata;
