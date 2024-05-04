'use client';
import React from 'react';
import { useContextProvider } from '../utils/context/Context';

const MusicControl = () => {
	const audioControl = React.useRef<HTMLAudioElement>(null);
	const { isLoader } = useContextProvider();
	React.useEffect(() => {
		if (isLoader) {
			audioControl.current?.play();
		}
	}, [isLoader]);
	return (
		<div className='fixed bottom-5 z-40'>
			<audio
				controls
				ref={audioControl}
				className='z-10'
				src='/wedding.mp3'></audio>
		</div>
	);
};

export default MusicControl;
