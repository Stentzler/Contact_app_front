import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';
import {TextField} from '@mui/material';
import {useState} from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {StyledRegisterForm} from './styles';
import {toastError, toastSuccess} from '../../utils/toasts';
import api from '../../utils/axios';
import {registerSchema} from '../../utils/schemas';
import {IFormInputs} from '../../interfaces';

const BootstrapDialog = styled(Dialog)(({theme}) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
	const {children, onClose, ...other} = props;

	return (
		<DialogTitle sx={{m: 0, p: 2}} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: theme => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}

function RegistrationModal() {
	const [open, setOpen] = useState(false);
	const [disableBtn, setDisableBtn] = useState(false);

	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm<IFormInputs>({
		resolver: yupResolver(registerSchema),
		reValidateMode: 'onSubmit',
	});

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const onSubmit: SubmitHandler<IFormInputs> = async data => {
		const {confirmPassword, ...userData} = data;
		setDisableBtn(true);

		try {
			await api.post('/users', userData);

			setDisableBtn(false);
			toastSuccess('Usuário criado com sucesso!');
			handleClose();
		} catch (error: any) {
			const message: string = error.response.data.message;

			setDisableBtn(false);
			toastError(message);
		}
	};

	return (
		<>
			<Link underline='always' onClick={handleClickOpen}>
				Registrar-se
			</Link>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				<BootstrapDialogTitle
					id='customized-dialog-title'
					onClose={handleClose}
				>
					Registre-se
				</BootstrapDialogTitle>
				<DialogContent dividers>
					<StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name='fullName'
							control={control}
							defaultValue=''
							render={({field}) => (
								<TextField
									{...field}
									id='fullNameRegister'
									type='text'
									label='Nome Completo'
									size='small'
									variant='standard'
									error={!!errors.fullName}
									helperText={errors.fullName ? errors.fullName?.message : ''}
								/>
							)}
						/>

						<Controller
							name='email'
							control={control}
							defaultValue=''
							render={({field}) => (
								<TextField
									{...field}
									id='emailRegister'
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
							name='mobilePhone'
							control={control}
							defaultValue=''
							render={({field}) => (
								<TextField
									{...field}
									id='mobilePhoneRegister'
									type='text'
									size='small'
									label='Telefone'
									variant='standard'
									error={!!errors.mobilePhone}
									helperText={
										errors.mobilePhone ? errors.mobilePhone?.message : ''
									}
								/>
							)}
						/>
						<Controller
							name='phone'
							control={control}
							defaultValue=''
							render={({field}) => (
								<TextField
									{...field}
									id='phoneRegister'
									type='text'
									size='small'
									label='Telefone Fixo (Opcional)'
									variant='standard'
									error={!!errors.phone}
									helperText={errors.phone ? errors.phone?.message : ''}
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
									id='passwordRegister'
									type='password'
									size='small'
									label='Senha'
									variant='standard'
									error={!!errors.password}
									helperText={errors.password ? errors.password?.message : ''}
								/>
							)}
						/>

						<Controller
							name='confirmPassword'
							control={control}
							defaultValue=''
							render={({field}) => (
								<TextField
									{...field}
									type='password'
									id='confirmPasswordRegister'
									size='small'
									label='Cofirme a senha'
									variant='standard'
									error={!!errors.confirmPassword}
									helperText={
										errors.confirmPassword
											? errors.confirmPassword?.message
											: ''
									}
								/>
							)}
						/>
						<button
							className='custom-btn'
							disabled={disableBtn}
							id='registerBtn'
						>
							{disableBtn ? 'Loading...' : <span>Registrar</span>}
						</button>
					</StyledRegisterForm>
				</DialogContent>
			</BootstrapDialog>
		</>
	);
}

export default RegistrationModal;
