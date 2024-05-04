'use client';
import React, { HTMLAttributes } from 'react';
import useCountdown from '../utils/hooks/useCountdown';
import cn from '../utils/cn';
import dynamic from 'next/dynamic';
import { HeightLine, WidthLine } from './Line';

type ShowCounter = {
	value: number;
	type: 'days' | 'hours' | 'minutes' | 'seconds';
};
const ShowCounter = ({ value, type }: ShowCounter) => {
	return (
		<div className='flex p-2 w-20 flex-col items-center border-[1px] border-solid border-marble-blue'>
			<span className='font-newyork'>{value <= 0 ? '00' : value}</span>
			<span className='text-base font-sans uppercase font-medium'>
				{type}
			</span>
		</div>
	);
};
interface Props extends HTMLAttributes<HTMLDivElement> {}
const Countdown = ({ className }: Props) => {
	const [days, hours, minutes, seconds] = useCountdown('22 may 2024');
	console.info('countdown');
	return (
		<div className={cn(`flex flex-row`, className)}>
			<ShowCounter
				value={days}
				type={'days'}
			/>
			<ShowCounter
				value={hours}
				type={'hours'}
			/>
			<ShowCounter
				value={minutes}
				type={'minutes'}
			/>
			<ShowCounter
				value={seconds}
				type={'seconds'}
			/>
		</div>
	);
};

export default dynamic(() => Promise.resolve(Countdown), {
	ssr: false,
});
