import {useContext, useEffect} from 'react';
import {FaSignOutAlt, FaUserCheck} from 'react-icons/fa';
import UserContext from '../../context/UserContext';
import {useNavigate} from 'react-router-dom';
import UserDeleteModal from '../UserDeleteModal';
import UserEditModal from '../UserEditModal';
import api from '../../utils/axios';
import ContactCreateModal from '../ContactCreateModal';

function UserMenu() {
	const {userData, token, setUserData, setToken} = useContext(UserContext);
	const navigate = useNavigate();

	// isToken
	useEffect(() => {
		if (token) {
			validateToken();
		} else {
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const validateToken = async () => {
		try {
			const response = await api.get('/users', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			setUserData(response.data);
		} catch (error) {
			navigate('/');
		}
	};

	const handleLogout = () => {
		navigate('/');
		setToken('');
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

					<ContactCreateModal />

					<UserEditModal />

					<UserDeleteModal userName={userData.fullName} />
				</div>
			</div>
		</>
	);
}

export default UserMenu;
