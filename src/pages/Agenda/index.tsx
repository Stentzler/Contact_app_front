import {StyledContainerAgenda} from './styles';
import CardContainer from '../../components/CardContainer';
import UserMenu from '../../components/UserMenu';

function Agenda() {
	return (
		<StyledContainerAgenda>
			<UserMenu />
			<CardContainer />
		</StyledContainerAgenda>
	);
}

export default Agenda;
