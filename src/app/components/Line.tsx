import { HTMLAttributes } from 'react';
import cn from '../utils/cn';
interface Props extends HTMLAttributes<HTMLSpanElement> {}
const HeightLine = ({ className }: Props) => {
	return (
		<span className={cn(`block h-full w-[1px] bg-black`, className)}></span>
	);
};

const WidthLine = ({ className }: Props) => {
	return (
		<span className={cn(`block h-[1px] w-full bg-black`, className)}></span>
	);
};
export { HeightLine, WidthLine };
