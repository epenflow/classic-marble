import React from 'react';
import PlaceAndTime from '../components/PlaceAndTime';
import { GROOM_TEXT, BRIDE_TEXT, BRIDEGROOM_TEXT } from '../constants';
const Location = () => {
	return (
		<section className='w-screen bg-marble-white flex flex-col items-center px-5 py-5 gap-2 font-serif'>
			<p className='lg:w-1/2 text-center'>
				Merupakan suatu kebahagian bagi kami sekeluarga. Apabila
				Bapak/Ibu Saudara/I berkenan hadir untuk memberikan doa restu
				pada :
			</p>
			<PlaceAndTime />
			<p className='lg:w-1/2 text-center'>
				Atas kehadiran serta doa restu Bapak/Ibu/Saudara/I. kami
				sekeluarga mengucapkan terima kasih.
			</p>
			<p>Kami yang berbahagia,</p>
			<div className='flex flex-row gap-2 lg:gap-10 justify-between text-center'>
				<span>
					Kel. <span className='capitalize'>{GROOM_TEXT.father}</span>
				</span>
				<span>
					Kel. <span className='capitalize'>{BRIDE_TEXT.father}</span>
				</span>
			</div>
			<div className='flex gap-1 text-2xl capitalize text-center font-newyork pt-10'>
				<span>{BRIDEGROOM_TEXT.groom}</span>
				<span>&</span>
				<span>{BRIDEGROOM_TEXT.bride}</span>
			</div>
		</section>
	);
};

export default Location;
