import {
	createContext,
	useState,
	ReactNode,
	SetStateAction,
	Dispatch,
} from 'react';

interface Props {
	children: ReactNode;
}

interface IContext {
	contacts: any[];
	setContacts: any;
}

export interface IContactUpdateRequest {
	fullName?: string;
	email?: string;
	password?: string;
	mobilePhone?: string;
	phone?: string;
}

const ContactContext = createContext<IContext>({} as IContext);

export const ContactProvider = ({children}: Props) => {
	const [contacts, setContacts] = useState([]);

	return (
		<ContactContext.Provider value={{contacts, setContacts}}>
			{children}
		</ContactContext.Provider>
	);
};

export default ContactContext;
