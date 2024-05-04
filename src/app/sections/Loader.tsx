'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import cn from '../utils/cn';
import { useContextProvider } from '../utils/context/Context';
import { motion, AnimatePresence } from 'framer-motion';
import { BrideGroom } from '../components/BrideGroom';
import { WidthLine } from '../components/Line';
import Image from 'next/image';
export const Loader = () => {
	const { isLoader, setLoader } = useContextProvider();
	const useSearch = useSearchParams();
	const kepada = useSearch.get('kepada');
	function handleClick() {
		setLoader((prev) => !prev);
	}
	React.useEffect(() => {
		if (!isLoader) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isLoader]);
	return (
		<AnimatePresence>
			{!isLoader ? (
				<motion.section
					exit={{
						translateY: '-100vh',
						transition: {
							duration: 1.5,
							type: 'spring',
							damping: 50,
							stiffness: 150,
						},
					}}
					className='fixed h-screen w-screen bg-marble-white px-2 py-5 flex flex-col justify-between items-center z-50 font-serif'>
					<h1 className='text-2xl font-serif uppercase text-center'>
						the wedding of
					</h1>
					<BrideGroom className='z-50' />
					<div className='flex flex-col text-center text-xl z-20'>
						<span className='text-start capitalize'>
							kepada&nbsp;:
						</span>
						<span className='text-start capitalize'>
							bapak/ibu/saudara/i
						</span>
						<WidthLine />
						<span className='py-2 capitalize '>
							{kepada ? kepada : 'undangan'}
						</span>
						<WidthLine />
						<span className='text-lg'>
							Mohon maaf apabila ada kesalahan penulisan
							nama/gelar
						</span>
						<button
							onClick={handleClick}
							className='py-1.5 bg-marble-blue text-marble-white capitalize'>
							buka undangan
						</button>
						<Image
							src={'/rose.png'}
							alt='rose'
							width={500}
							height={500}
							className='absolute bottom-2 -z-10 left-1/2 -translate-x-1/2 opacity-50'
						/>
					</div>
				</motion.section>
			) : null}
		</AnimatePresence>
	);
};
