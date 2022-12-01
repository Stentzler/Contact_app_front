import {StyledContainerAgenda} from './styles';
import {
	FaUserEdit,
	FaUserPlus,
	FaSignOutAlt,
	FaUserSlash,
} from 'react-icons/fa';
import ContactCard from '../../components/Card';

function Agenda() {
	return (
		<StyledContainerAgenda>
			<div className='user-menu'>
				<div className='menu-items'>
					<p>
						<FaSignOutAlt />
						Logout
					</p>
					<p>
						<FaUserPlus />
						Novo Contato
					</p>
					<p>
						<FaUserEdit />
						Editar Meus dados
					</p>
					<p>
						<FaUserSlash />
						Excluir minha conta
					</p>
				</div>
			</div>
			<div className='user-contacts'>
				<input type='serch' placeholder='SERACH BAR TO COME' />
				<div className='card-container'>
					<ContactCard user_name={'Ayrton'} />
					<ContactCard user_name={'Douglas'} />
					<ContactCard user_name={'Xhunda'} />
					<ContactCard user_name={'Estefani'} />
					<ContactCard user_name={'Estefani'} />
					<ContactCard user_name={'Estefani'} />
				</div>
			</div>
		</StyledContainerAgenda>
	);
}

export default Agenda;
