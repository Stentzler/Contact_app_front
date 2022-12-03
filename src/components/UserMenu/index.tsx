import {useContext, useEffect} from 'react';
import {
	FaSignOutAlt,
	FaUserCheck,
	FaUserEdit,
	FaUserPlus,
} from 'react-icons/fa';
import UserContext from '../../context/UserContext';
import {useNavigate} from 'react-router-dom';
import UserDeleteModal from '../UserDeleteModal';

function UserMenu() {
	const {userData, token} = useContext(UserContext);
	const navigate = useNavigate();

	// isToken
	useEffect(() => {
		if (Object.keys(token).length === 0 && token.constructor === Object) {
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleLogout = () => {
		// navigate('/')
		// setToken({})
		console.log(userData);
		console.log(token);
	};

	return (
		<>
			<div className='user-menu'>
				<div className='menu-items'>
					<div className='profile'>
						<FaUserCheck size={25} />
						<h3>{userData?.fullName}</h3>
					</div>

					<div className='menu-item'>
						<span className='menu-btn' onClick={handleLogout}>
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
					<UserDeleteModal userName={userData.fullName} />
				</div>
			</div>
		</>
	);
}

export default UserMenu;
