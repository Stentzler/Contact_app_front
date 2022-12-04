import {createContext, useState, ReactNode, useContext} from 'react';
import api from '../../utils/axios';
import {toastError, toastSuccess} from '../../utils/toasts';
import {useNavigate} from 'react-router-dom';
import ContactContext from '../ContactContext';
import {IUserData} from '../../interfaces';

interface Props {
	children: ReactNode;
}

interface IContext {
	login: (data: any) => Promise<void>;
	setToken: React.Dispatch<React.SetStateAction<string>>;
	token: string;
	setUserData: React.Dispatch<React.SetStateAction<{}>>;
	userData: IUserData;
	disableLoginButton: boolean;
}

const UserContext = createContext<IContext>({} as IContext);

export const UserProvider = ({children}: Props) => {
	const [token, setToken] = useState('');
	const [userData, setUserData] = useState<IUserData | {}>({});
	const [disableLoginButton, setDisableLoginButton] = useState(false);
	const navigate = useNavigate();

	//Contact Context
	const {setContacts} = useContext(ContactContext);

	const login = async (data: any) => {
		setDisableLoginButton(true);

		try {
			// get/set token
			const response = await api.post('/users/login', data);
			setToken(response.data.token);

			// get/set UserData
			const userData = await api.get('/users', {
				headers: {Authorization: `Bearer ${response.data.token}`},
			});
			setUserData(userData.data);

			// get contacts
			const contacts = await api.get('/users/contacts', {
				headers: {Authorization: `Bearer ${response.data.token}`},
			});
			setContacts(contacts.data);

			setDisableLoginButton(false);
			toastSuccess('Bem-vindo!');
			navigate('/agenda');
		} catch (error: any) {
			const message: string = error.response.data.message;

			setDisableLoginButton(false);
			toastError(message);
		}
	};

	return (
		<UserContext.Provider
			value={{
				login,
				setUserData,
				setToken,
				disableLoginButton,
				token,
				userData,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
