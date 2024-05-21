import Image from 'next/image';
import { Loader } from './sections/Loader';
import { ContextProvider } from './utils/context/Context';
import Hero from './sections/Hero';
import Biodata from './sections/Main';
import Location from './sections/Location';
import Galleri from './sections/Galleri';
export default function Home() {
	return (
		<main className='overflow-hidden'>
			<ContextProvider>
				<Loader />
				<Hero />
				<Biodata />
				<Location />
				<Galleri />
			</ContextProvider>
		</main>
	);
}
