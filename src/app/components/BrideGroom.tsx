import React, { HTMLAttributes } from 'react';
import cn from '../utils/cn';
import { BRIDEGROOM_TEXT } from '../constants';
interface Props extends HTMLAttributes<HTMLDivElement> {}
export const BrideGroom = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'font-newyork capitalize text-8xl flex flex-col text-center gap-5',
				className
			)}>
			<span>{BRIDEGROOM_TEXT.groom}</span>
			<span>&</span>
			<span>{BRIDEGROOM_TEXT.bride}</span>
		</div>
	);
};
