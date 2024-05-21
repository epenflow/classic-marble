type Biodata = {
	name: string;
	address: string;
	text: string;
	father: string;
	mother: string;
	nickname: string;
};
const GROOM_BIODATA: Biodata = {
	name: 'i gede putu wegen wismaya',
	text: 'Anak Pertama dari pasangan',
	father: 'i nyoman windra',
	mother: 'ni wayan wilatri',
	address: 'br. dukuh, desa sibetan, bebandem, karangasem',
	nickname: 'wegen',
};

const BRIDE_BIODATA: Biodata = {
	name: 'putu devayu anthareztta',
	text: 'Anak Kedua dari pasangan',
	father: 'i made suparyana',
	mother: 'dewa ayu putu tirtha',
	address: 'br. dukuh, desa sibetan, bebandem, karangasem',
	nickname: 'devayu',
};
type Preposition = {
	days: string;
	date: number;
	month: string;
	time: string;
	address: string;
	addressLink: string;
};
const PREPOSITION: Preposition = {
	days: 'jumat',
	date: 10,
	month: 'mei 2023',
	time: 'Pukul : 11.30 WITA - Selesai',
	address: 'Bertempat di Br. Dajan Peken, Desa Timpag, Kerambitan, Tabanan',
	addressLink: '#',
};
export { BRIDE_BIODATA, GROOM_BIODATA, PREPOSITION };
