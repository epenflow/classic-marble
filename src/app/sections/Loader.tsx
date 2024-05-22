'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import cn from '../utils/cn';
import { useContextProvider } from '../utils/context/Context';
import { motion, AnimatePresence } from 'framer-motion';
import Nickname from '../components/Nickname';
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
						opacity: 0,
						transition: {
							duration: 1.5,
							type: 'spring',
							damping: 50,
							stiffness: 150,
						},
					}}
					className='fixed h-screen w-screen bg-marble-white px-2 py-20 flex flex-col justify-between items-center z-50 font-serif'>
					<motion.h1
						initial={{ y: -100, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 100,
							transition: { duration: 0.5, ease: 'easeIn' },
						}}
						className='text-lg lg:text-2xl font-serif uppercase text-center z-50'>
						the wedding of
					</motion.h1>
					<Nickname className='z-50' />
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 100,
							transition: { duration: 0.5, ease: 'easeIn' },
						}}
						className='flex flex-col text-center z-20'>
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
						<span>
							Mohon maaf apabila ada kesalahan penulisan
							nama/gelar
						</span>
						<button
							onClick={handleClick}
							className='py-1.5 bg-marble-blue text-marble-white capitalize'>
							buka undangan
						</button>
					</motion.div>
					<Image
						src={'/rose.png'}
						alt='rose'
						width={500}
						height={500}
						className='absolute bottom-2 -z-10 left-1/2 -translate-x-1/2 opacity-50'
					/>
				</motion.section>
			) : null}
		</AnimatePresence>
	);
};
