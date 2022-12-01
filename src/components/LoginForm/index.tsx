import {StyledForm} from './styles';
import {TextField} from '@mui/material';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RegistrationModal from '../RegistrationModal';

interface IFormInputs {
	email: string;
	password: string;
}

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

function LoginForm() {
	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
		reValidateMode: 'onSubmit',
	});

	const onSubmit: SubmitHandler<IFormInputs> = data => {
		console.log(data);
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<div className='input-container'>
				<Controller
					name='email'
					control={control}
					defaultValue=''
					render={({field}) => (
						<TextField
							{...field}
							type='email'
							label='Email'
							size='small'
							variant='standard'
							error={!!errors.email}
							helperText={errors.email ? errors.email?.message : ''}
						/>
					)}
				/>

				<Controller
					name='password'
					control={control}
					defaultValue=''
					render={({field}) => (
						<TextField
							{...field}
							type='password'
							size='small'
							label='Senha'
							variant='standard'
							error={!!errors.password}
							helperText={errors.password ? errors.password?.message : ''}
						/>
					)}
				/>
			</div>

			<button className='custom-btn'>
				<span>Login</span>
			</button>
			<RegistrationModal />
		</StyledForm>
	);
}

export default LoginForm;
