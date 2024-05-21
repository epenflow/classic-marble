import React, { HTMLAttributes } from 'react';
import cn from '../utils/cn';
import { BRIDE_BIODATA, GROOM_BIODATA } from '../constants';
interface Props extends HTMLAttributes<HTMLDivElement> {}
const Nickname = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'font-newyork capitalize text-8xl flex flex-col text-center gap-5',
				className
			)}>
			<span>{GROOM_BIODATA.nickname}</span>
			<span>&</span>
			<span>{BRIDE_BIODATA.nickname}</span>
		</div>
	);
};
export default Nickname;
