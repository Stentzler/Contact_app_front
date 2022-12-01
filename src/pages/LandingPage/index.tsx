import WelcomeSVG from '../../assets/images/Welcome';
import LoginForm from '../../components/LoginForm';
import {MainContainer} from './styles';
import Header from '../../components/Header';

function LandingPage() {
	return (
		<>
			<Header
				ptext='Sua melhor opção para lembrar de todos os seus contatos'
				htext='Bem-vindo à AppGenda'
			/>
			<MainContainer>
				<LoginForm />
				<WelcomeSVG />
			</MainContainer>
		</>
	);
}

export default LandingPage;
