import {createContext, useState, ReactNode} from 'react';
import {ContactInfo} from '../../interfaces';

interface IProps {
	children: ReactNode;
}

interface IContext {
	contacts: ContactInfo[];
	setContacts: React.Dispatch<React.SetStateAction<never[]>>;
}

const ContactContext = createContext<IContext>({} as IContext);

export const ContactProvider = ({children}: IProps) => {
	const [contacts, setContacts] = useState([]);

	return (
		<ContactContext.Provider value={{contacts, setContacts}}>
			{children}
		</ContactContext.Provider>
	);
};

export default ContactContext;
