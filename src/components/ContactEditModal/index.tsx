import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {TextField} from '@mui/material';
import {useContext, useState} from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {editContactSchema} from '../../utils/schemas';
import {StyledEditContactForm} from './styles';
import api from '../../utils/axios';
import {toastError, toastSuccess} from '../../utils/toasts';
import UserContext from '../../context/UserContext';
import ContactContext from '../../context/ContactContext';

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

interface IFormInputs {
	email: string;
	fullName: string;
	mobilePhone: string;
	phone: string;
}

interface IProps {
	contactData: any;
}

function ContactEditModal({contactData}: IProps) {
	const [open, setOpen] = useState(false);
	const [disableBtn, setDisableBtn] = useState(false);
	const {token} = useContext(UserContext);
	const {setContacts} = useContext(ContactContext);

	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm<IFormInputs>({
		resolver: yupResolver(editContactSchema),
		reValidateMode: 'onSubmit',
	});

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const onSubmit: SubmitHandler<IFormInputs> = async data => {
		setDisableBtn(true);

		try {
			await api.patch(`/users/contacts/${contactData.id}`, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const contacts = await api.get('/users/contacts', {
				headers: {Authorization: `Bearer ${token}`},
			});
			setContacts(contacts.data);

			setDisableBtn(false);
			toastSuccess('Dados atualizados com sucesso!');
			handleClose();
		} catch (error: any) {
			const message: string = error.response.data.message;

			setDisableBtn(false);
			toastError(message);
		}
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
							defaultValue={contactData.fullName}
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
							defaultValue={contactData.email}
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
							defaultValue={contactData.mobilePhone}
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
							defaultValue={contactData.phone}
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

						<button className='custom-btn' disabled={disableBtn}>
							<span>Editar</span>
						</button>
					</StyledEditContactForm>
				</DialogContent>
			</BootstrapDialog>
		</>
	);
}

export default ContactEditModal;
