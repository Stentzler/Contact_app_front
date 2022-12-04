import {StyledHeaderContainer} from './styles';

interface IProps {
	ptext: string;
	htext: string;
}

function Header({ptext = '', htext = ''}: IProps) {
	return (
		<StyledHeaderContainer>
			{htext && <h1 className='header-h1'>{htext}</h1>}
			{ptext && <p>{ptext}</p>}
		</StyledHeaderContainer>
	);
}

export default Header;
