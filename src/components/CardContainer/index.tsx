import {FaSearch} from 'react-icons/fa';
import ContactCard from '../Card';

function CardContainer() {
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
					<ContactCard user_name={'Ayrton'} />
					<ContactCard user_name={'Douglas'} />
					<ContactCard user_name={'Xhunda'} />
					<ContactCard user_name={'Estefani'} />
					<ContactCard user_name={'Estefani'} />
					<ContactCard user_name={'Estefani'} />
				</div>
			</div>
		</>
	);
}

export default CardContainer;
