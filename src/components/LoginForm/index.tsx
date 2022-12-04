import {StyledDiv} from './styles';
import {TextField} from '@mui/material';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import RegistrationModal from '../RegistrationModal';
import {loginSchema} from '../../utils/schemas';
import {useContext} from 'react';
import UserContext from '../../context/UserContext';
import {IFormInputs} from '../../interfaces';

function LoginForm() {
	const {login, disableLoginButton} = useContext(UserContext);

	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm<IFormInputs>({
		resolver: yupResolver(loginSchema),
		reValidateMode: 'onSubmit',
	});

	const onSubmit: SubmitHandler<IFormInputs> = async data => {
		await login(data);
	};

	return (
		<>
			<StyledDiv>
				<form onSubmit={handleSubmit(onSubmit)}>
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

					<button className='custom-btn' disabled={disableLoginButton}>
						{disableLoginButton ? 'Loading...' : <span>Login</span>}
					</button>
				</form>
				<div className='register'>
					<RegistrationModal />
				</div>
			</StyledDiv>
		</>
	);
}

export default LoginForm;
