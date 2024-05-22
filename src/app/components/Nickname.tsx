'use client';
import React, { HTMLAttributes } from 'react';
import cn from '../utils/cn';
import { BRIDE_BIODATA, GROOM_BIODATA } from '../constants';
import { motion } from 'framer-motion';
interface Props extends HTMLAttributes<HTMLDivElement> {}
const Nickname = ({ className }: Props) => {
	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{
				scale: 1,
				transition: { duration: 0.5, delay: 0.25, ease: 'easeIn' },
			}}
			className={cn(
				'font-newyork capitalize text-8xl flex flex-col text-center gap-5',
				className
			)}>
			<span>{GROOM_BIODATA.nickname}</span>
			<span>&</span>
			<span>{BRIDE_BIODATA.nickname}</span>
		</motion.div>
	);
};
export default Nickname;
