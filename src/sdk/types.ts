export enum FieldType {
	text = 'text',
	url = 'url',
	email = 'email',
	number = 'number',
	autoNumber = 'autoNumber',
	date = 'date',
	dateTime = 'dateTime',
	money = 'money',
	boolean = 'boolean',
	address = 'address',
	personName = 'personName',
	phone = 'phone',
	picklist = 'picklist',
	lookup = 'lookup',
	ObjectId = 'ObjectId',
	encrypted = 'encrypted',
	filter = 'filter',
	richText = 'richText',
	file = 'file',
	percentage = 'percentage',
	JSON = 'json',
}

export type Label = {
	[lang: string]: string;
};

export type Email = {
	type: string;
	address: string;
};

export type Money = {
	currency?: string;
	value: number;
};

export type Address = {
	country?: string;
	state: string;
	city: string;
	district: string;
	placeType?: string;
	place: string;
	number: string;
	postalCode?: string;
	complement?: string;
	geolocation?: [number, number];
};

export type PersonName = {
	first: string;
	last: string;
	full: string;
};

export type Phone = {
	countryCode?: string;
	phoneNumber: string;
};

export type FieldOptions = {
	[key: string]:
		| {
				[lang: string]: string;
		  }
		| { sort?: number };
};

export type FileDescriptor = {
	key: string;
	name: string;
	etag?: string;
	kind?: string;
	size?: number;
};
