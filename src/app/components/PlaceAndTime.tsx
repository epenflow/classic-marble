import React from 'react';
import { PLACEANDTIME_TEXT } from '../constants';
import { FaMapLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
const PlaceAndTime = () => {
	return (
		<div className='flex flex-col gap-2 p-2 border-[1px] border-solid border-marble-blue lg:flex-row m-auto'>
			<div className='flex flex-col border-[1px] border-solid border-marble-blue text-center font-serif flex-shrink-0'>
				<span className='bg-marble-blue p-2 text-center capitalize text-lg text-marble-white'>
					{PLACEANDTIME_TEXT.days}
				</span>
				<span className='text-4xl'>{PLACEANDTIME_TEXT.date}</span>
				<span className='uppercase p-2'>{PLACEANDTIME_TEXT.month}</span>
			</div>
			<div className='flex flex-col border-[1px] border-solid border-marble-blue text-center font-serif'>
				<span className='p-2 text-center capitalize text-lg border-b-[1px] border-solid border-marble-blue'>
					{PLACEANDTIME_TEXT.time}
				</span>
				<span className='p-2 m-auto'>{PLACEANDTIME_TEXT.address}</span>
				<Link
					href={
						'https://www.google.com/maps?q=-8.520263671875,115.36083221435547&z=17&hl=en'
					}
					className='bg-marble-blue p-2 capitalize text-marble-white flex flex-row gap-2 items-center justify-center'>
					<FaMapLocationDot />
					<span>buka maps</span>
				</Link>
			</div>
		</div>
	);
};

export default PlaceAndTime;
