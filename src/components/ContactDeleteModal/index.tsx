import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Typography} from '@mui/material';
import {useContext, useState} from 'react';
import {StyledDeleteContactContainer} from './styles';
import UserContext from '../../context/UserContext';
import ContactContext from '../../context/ContactContext';
import api from '../../utils/axios';
import {toastError, toastSuccess} from '../../utils/toasts';
import {ContactInfo} from '../../interfaces';

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

interface IProps {
	contactData: ContactInfo;
}

// Pegar id do contato
function ContactDeleteModal({contactData}: IProps) {
	const [open, setOpen] = useState(false);
	const [disableBtn, setDisableBtn] = useState(false);
	const {token} = useContext(UserContext);
	const {setContacts} = useContext(ContactContext);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const confirmDelete = async () => {
		setDisableBtn(true);

		try {
			await api.delete(`/users/contacts/${contactData.id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const contacts = await api.get('/users/contacts', {
				headers: {Authorization: `Bearer ${token}`},
			});
			setContacts(contacts.data);

			setDisableBtn(false);
			toastSuccess('Contato excluído com sucesso!');
			handleClose();
		} catch (error: any) {
			const message: string = error.response.data.message;

			setDisableBtn(false);
			toastError(message);
		}
	};

	return (
		<>
			<button
				className='custom-btn'
				style={{backgroundColor: '#c70707'}}
				onClick={handleClickOpen}
			>
				<span>Deletar</span>
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
					Deletar Contato
				</BootstrapDialogTitle>
				<StyledDeleteContactContainer>
					<DialogContent dividers>
						<Typography sx={{mt: 2, mb: 2}}>
							Você realmente deseja excluir o usuário {contactData.fullName}?
						</Typography>
					</DialogContent>
					<button
						className='custom-btn delete-confirm'
						onClick={confirmDelete}
						style={{backgroundColor: '#c70707'}}
						disabled={disableBtn}
					>
						<span>Deletar</span>
					</button>
				</StyledDeleteContactContainer>
			</BootstrapDialog>
		</>
	);
}

export default ContactDeleteModal;
