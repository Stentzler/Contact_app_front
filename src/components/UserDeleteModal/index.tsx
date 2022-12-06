import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Typography} from '@mui/material';
import {useContext, useState} from 'react';
import {StyledDeleteContactContainer} from './styles';
import {FaUserSlash} from 'react-icons/fa';
import UserContext from '../../context/UserContext';
import api from '../../utils/axios';
import {toastError, toastSuccess} from '../../utils/toasts';
import {useNavigate} from 'react-router-dom';

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
	userName: string | undefined;
}

// Pegar id do contato
function UserDeleteModal({userName}: IProps) {
	const [disableDelButton, setDisableDelButton] = useState(false);
	const [open, setOpen] = useState(false);
	const {setToken, setUserData, token} = useContext(UserContext);
	const navigate = useNavigate();

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = async () => {
		setDisableDelButton(true);

		try {
			await api.delete('/users', {
				headers: {Authorization: `Bearer ${token}`},
			});

			setUserData({});
			setToken('');

			setDisableDelButton(false);
			toastSuccess('Usuário deleteado com sucesso!');
			navigate('/');
			handleClose();
		} catch (error: any) {
			const message: string = error.response.data.message;

			setDisableDelButton(false);
			toastError(message);
		}
	};

	return (
		<>
			<div className='menu-item'>
				<span className='menu-btn' onClick={handleClickOpen}>
					<FaUserSlash />
					Excluir Conta
				</span>
			</div>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				<BootstrapDialogTitle
					id='customized-dialog-title'
					onClose={handleClose}
				>
					Deletar Conta
				</BootstrapDialogTitle>
				<StyledDeleteContactContainer>
					<DialogContent dividers>
						<Typography sx={{mt: 2, mb: 2}}>
							Você realmente deseja excluir sua conta {userName}?
						</Typography>
					</DialogContent>
					<button
						className='custom-btn user-delete'
						onClick={handleDelete}
						style={{backgroundColor: '#c70707'}}
						disabled={disableDelButton}
					>
						<span>Deletar</span>
					</button>
				</StyledDeleteContactContainer>
			</BootstrapDialog>
		</>
	);
}

export default UserDeleteModal;
