import {useContext} from 'react';
import {FaSearch} from 'react-icons/fa';
import ContactContext from '../../context/ContactContext';
import ContactCard from '../Card';

function CardContainer() {
	const {contacts} = useContext(ContactContext);

	return (
		<>
			<div className='user-contacts'>
				<div className='input-container'>
					<input
						className='search-bar'
						type='text'
						placeholder='Busca por nome'
					/>
					<FaSearch />
				</div>
				<div className='card-container'>
					{contacts.map(contact => (
						<ContactCard contactData={contact} key={contact.id} />
					))}
				</div>
			</div>
		</>
	);
}

export default CardContainer;
