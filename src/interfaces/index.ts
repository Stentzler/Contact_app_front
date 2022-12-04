export interface ILoginRequest {
	email: string;
	password: string;
}

export interface ContactData {
	fullName: string;
	email: string;
	phone: string;
	mobilePhone: string;
}

export interface IFormInputs {
	email: string;
	password?: string;
	confirmPassword?: string;
	fullName: string;
	mobilePhone: string;
	phone?: string;
}

export interface IUserRequest {
	fullName: string;
	email: string;
	password: string;
	mobilePhone: string;
	phone?: string;
}

export interface ContactInfo {
	fullName: string;
	email: string;
	phone: string;
	mobilePhone: string;
	id: string;
}

export interface IUserData {
	id?: string;
	fullName?: string;
	email?: string;
	mobilePhone?: string;
	phone?: string;
	isActive?: boolean;
	createdAt?: string;
}
