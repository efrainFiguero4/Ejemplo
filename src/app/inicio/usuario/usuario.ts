export class Usuario {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	company: company;
}

class company {
	name: string;
	catchPhrase: string;
	bs: string;
}

class Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

class Geo {
	lat: string;
	lng: string;
}
