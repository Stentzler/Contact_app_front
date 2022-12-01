import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {TextField} from '@mui/material';
import {useState} from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {StyledEditContactForm} from './styles';

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

const schema = yup.object().shape({
	email: yup.string().email().required(),
});

interface IFormInputs {
	email: string;
	password: string;
	confirmPassword: string;
	fullName: string;
	mobilePhone: string;
	phone: string;
}

function ContactEditModal() {
	const [open, setOpen] = useState(false);

	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
		reValidateMode: 'onSubmit',
	});

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const onSubmit: SubmitHandler<IFormInputs> = data => {
		console.log(data);
		handleClose();
	};

	return (
		<>
			<button className='custom-btn' onClick={handleClickOpen}>
				<span>Editar</span>
			</button>

			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				<BootstrapDialogTitle
					id='customized-dialog-title'
					onClose={handleClose}
				>
					Editar Contato
				</BootstrapDialogTitle>
				<DialogContent dividers>
					<StyledEditContactForm onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name='fullName'
							control={control}
							defaultValue=''
							render={({field}) => (
								<TextField
									{...field}
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
									type='text'
									size='small'
									label='Telefone Fixo (Opcional)'
									variant='standard'
									error={!!errors.phone}
									helperText={errors.phone ? errors.phone?.message : ''}
								/>
							)}
						/>

						<button className='custom-btn'>
							<span>Editar</span>
						</button>
					</StyledEditContactForm>
				</DialogContent>
			</BootstrapDialog>
		</>
	);
}

export default ContactEditModal;
