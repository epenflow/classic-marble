type Biodata = {
	name: string;
	address: string;
	text: string;
	father: string;
	mother: string;
	nickname: string;
};
const Biodata = ({ name, text, address, father, mother }: Biodata) => {
	return (
		<div className='lg:w-1/2 flex items-center flex-col'>
			<h1 className='text-2xl lg:text-4xl uppercase font-serif text-center'>
				{name}
			</h1>
			<span className='font-serif'>{text}</span>
			<span className='font-serif capitalize'>
				{father} & {mother}
			</span>
			<span className='capitalize text-center'>{address}</span>
		</div>
	);
};
export default Biodata;
