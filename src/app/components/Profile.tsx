import React from 'react';
import Biodata from './Biodata';
import { BRIDE_BIODATA, GROOM_BIODATA } from '../constants';
const Profile = () => {
	return (
		<div className='flex flex-col items-center w-full m-auto z-10'>
			<Biodata {...GROOM_BIODATA} />
			<span className='font-newyork text-4xl lg:text-6xl'>&</span>
			<Biodata {...BRIDE_BIODATA} />
		</div>
	);
};

export default Profile;
