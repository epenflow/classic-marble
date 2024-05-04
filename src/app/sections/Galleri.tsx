import React from 'react';

const Galleri = () => {
	return (
		<section className='w-screen bg-marble-blue flex flex-col items-center py-4 px-5 text-marble-white gap-2'>
			<h1 className='font-serif text-2xl'>Galleri</h1>
			<div className='flex gap-2 flex-wrap items-center justify-center'>
				{Array.from({ length: 10 }).map((_, index) => (
					<div
						className='h-80 w-80 bg-marble-white'
						key={index}></div>
				))}
			</div>
		</section>
	);
};

export default Galleri;
