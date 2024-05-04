'use client';
import React from 'react';
type contexts = {
	isLoader: boolean;
	setLoader: React.Dispatch<React.SetStateAction<boolean>>;
};
const createContext = React.createContext<contexts>({
	isLoader: false,
	setLoader: () => {},
});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoader, setLoader] = React.useState<boolean>(false);
	const values = {
		isLoader,
		setLoader,
	};
	return (
		<createContext.Provider value={values}>
			{children}
		</createContext.Provider>
	);
};

const useContextProvider = () => {
	const context = React.useContext<contexts>(createContext);
	if (context === undefined) {
		throw new Error(
			`useContextProvider must be use within ContextProvider`
		);
	}
	return context;
};
export { useContextProvider, ContextProvider };
