import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

export const registerSchema = yup.object().shape({
	fullName: yup.string().required('Este campo é obrigatório'),
	email: yup.string().email().required('Este campo é obrigatório'),
	mobilePhone: yup.string().min(10, 'Mínimo de dez dígitos').required(),
	phone: yup.string().matches(/.{9,}/, {
		excludeEmptyString: true,
		message: 'Mínimo de nove dígitos',
	}),
	password: yup
		.string()
		.required('Este campo é obrigatório')
		.min(8, 'Mínimo de oito dígitos'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Senhas não idênticas!'),
});

export const createContactSchema = yup.object().shape({
	fullName: yup.string().required('Este campo é obrigatório'),
	email: yup.string().email().required('Este campo é obrigatório'),
	mobilePhone: yup.string().min(10, 'Mínimo de dez dígitos').required(),
	phone: yup.string().matches(/.{9,}/, {
		excludeEmptyString: true,
		message: 'Mínimo de nove dígitos',
	}),
});

export const updateUserSchema = yup.object().shape({
	fullName: yup.string().required('Este campo é obrigatório'),
	email: yup.string().email().required('Este campo é obrigatório'),
	mobilePhone: yup.string().min(10, 'Mínimo de dez dígitos').required(),
	phone: yup.string().matches(/.{9,}/, {
		excludeEmptyString: true,
		message: 'Mínimo de nove dígitos',
	}),
});

export const editContactSchema = yup.object().shape({
	fullName: yup.string().required('Este campo é obrigatório'),
	email: yup.string().email().required('Este campo é obrigatório'),
	mobilePhone: yup.string().min(10, 'Mínimo de dez dígitos').required(),
	phone: yup.string().matches(/.{9,}/, {
		excludeEmptyString: true,
		message: 'Mínimo de nove dígitos',
	}),
});
