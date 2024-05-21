import React from 'react';
import Preposition from '../components/Preposition';
import { BRIDE_BIODATA, GROOM_BIODATA } from '../constants';
import Image from 'next/image';
const Location = () => {
	return (
		<section className='w-screen bg-marble-white flex flex-col items-center px-5 py-5 gap-2 font-serif border-[1px] border-solid border-marble-blue'>
			<Image
				src={'/wedding ring.png'}
				alt='curly-palm'
				width={50}
				height={50}
				className='opacity-90'
			/>
			<p className='lg:w-1/2 text-center'>
				Merupakan suatu kebahagian bagi kami sekeluarga. Apabila
				Bapak/Ibu Saudara/I berkenan hadir untuk memberikan doa restu
				pada :
			</p>
			<Preposition />
			<p className='lg:w-1/2 text-center'>
				Atas kehadiran serta doa restu Bapak/Ibu/Saudara/I. kami
				sekeluarga mengucapkan terima kasih.
			</p>
			<p>Kami yang berbahagia,</p>
			<div className='flex flex-row gap-2 lg:gap-10 justify-between text-center'>
				<span>
					Kel.
					<span className='capitalize'>{GROOM_BIODATA.father}</span>
				</span>
				<span>
					Kel.
					<span className='capitalize'>{BRIDE_BIODATA.father}</span>
				</span>
			</div>
			<div className='flex gap-1 text-2xl capitalize text-center font-newyork pt-10'>
				<span>{GROOM_BIODATA.nickname}</span>
				<span>&</span>
				<span>{BRIDE_BIODATA.nickname}</span>
			</div>
		</section>
	);
};

export default Location;
