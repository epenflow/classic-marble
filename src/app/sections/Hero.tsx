import React from 'react';
import Countdown from '../components/Countdown';
import { BrideGroom } from '../components/BrideGroom';
import Image from 'next/image';
import MusicControl from '../components/MusicControl';

const Hero = () => {
	return (
		<div className='px-5 py-4 flex flex-col items-center justify-between h-screen w-screen overflow-hidden bg-marble-blue text-marble-white relative'>
			<h1 className='text-2xl font-serif uppercase'>the wedding of</h1>
			<BrideGroom className='z-20 text-marble-white' />
			<MusicControl />
			<div className='flex flex-col gap-2 items-center'>
				<Countdown className='text-2xl font-serif bg-marble-white text-marble-blue outline outline-[1px] outline-offset-4 outline-marble-white justify-between z-10' />
			</div>
			<Image
				src={'/rosesWithButterly.png'}
				width={500}
				height={500}
				alt='rosesWithButterly.png'
				className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50'
			/>
		</div>
	);
};

export default Hero;
