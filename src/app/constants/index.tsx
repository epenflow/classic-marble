const BRIDEGROOM_TEXT = {
	groom: 'Wegen',
	bride: 'Devayu',
};
type Biodata = {
	name: string;
	address: string;
	text: string;
	father: string;
	mother: string;
};
const GROOM_TEXT: Biodata = {
	name: 'i gede putu wegen wismaya',
	text: 'Anak Pertama dari pasangan',
	father: 'i nyoman windra',
	mother: 'ni wayan wilatri',
	address: 'br. dukuh, desa sibetan, bebandem, karangasem',
};

const BRIDE_TEXT: Biodata = {
	name: 'putu devayu anthareztta',
	text: 'Anak Kedua dari pasangan',
	father: 'i made suparyana',
	mother: 'dewa ayu putu tirtha',
	address: 'br. dukuh, desa sibetan, bebandem, karangasem',
};
type PlaceAndTime = {
	days: string;
	date: number;
	month: string;
	time: string;
	address: string;
};
const PLACEANDTIME_TEXT: PlaceAndTime = {
	days: 'jumat',
	date: 10,
	month: 'mei 2023',
	time: 'Pukul : 11.30 WITA - Selesai',
	address: 'Bertempat di Br. Dajan Peken, Desa Timpag, Kerambitan, Tabanan',
};
export { BRIDEGROOM_TEXT, GROOM_TEXT, BRIDE_TEXT, PLACEANDTIME_TEXT };
