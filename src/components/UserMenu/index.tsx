import {
	FaSignOutAlt,
	FaUserCheck,
	FaUserEdit,
	FaUserPlus,
	FaUserSlash,
} from 'react-icons/fa';

function UserMenu() {
	const userName = 'Vinicius Stentzler';

	return (
		<>
			<div className='user-menu'>
				<div className='menu-items'>
					<div className='profile'>
						<FaUserCheck size={25} />
						<h3>{userName}</h3>
					</div>

					<div className='menu-item'>
						<span className='menu-btn'>
							<FaSignOutAlt />
							Logout
						</span>
					</div>

					<div className='menu-item'>
						<span className='menu-btn'>
							<FaUserPlus />
							Novo Contato
						</span>
					</div>

					<div className='menu-item'>
						<span className='menu-btn'>
							<FaUserEdit />
							Editar Meus dados
						</span>
					</div>

					<div className='menu-item'>
						<span className='menu-btn'>
							<FaUserSlash />
							Excluir minha conta
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserMenu;
