import React from 'react';
import { PREPOSITION } from '../constants';
import { FaMapLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
const Preposition = () => {
	return (
		<div className='flex flex-col gap-2 p-2 border-[1px] border-solid border-marble-blue lg:flex-row m-auto'>
			<div className='flex flex-col border-[1px] border-solid border-marble-blue text-center font-serif flex-shrink-0'>
				<span className='bg-marble-blue p-2 text-center capitalize text-lg text-marble-white'>
					{PREPOSITION.days}
				</span>
				<span className='text-4xl'>{PREPOSITION.date}</span>
				<span className='uppercase p-2'>{PREPOSITION.month}</span>
			</div>
			<div className='flex flex-col border-[1px] border-solid border-marble-blue text-center font-serif'>
				<span className='p-2 text-center capitalize text-lg border-b-[1px] border-solid border-marble-blue'>
					{PREPOSITION.time}
				</span>
				<span className='p-2 m-auto'>{PREPOSITION.address}</span>
				<Link
					href={PREPOSITION.addressLink}
					className='bg-marble-blue p-2 capitalize text-marble-white flex flex-row gap-2 items-center justify-center'>
					<FaMapLocationDot />
					<span>buka maps</span>
				</Link>
			</div>
		</div>
	);
};

export default Preposition;
