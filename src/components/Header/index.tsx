import {StyledHeaderContainer} from './styles';

function Header({ptext = '', htext = ''}) {
	return (
		<StyledHeaderContainer>
			{htext && <h1 className='header-h1'>{htext}</h1>}
			{ptext && <p>{ptext}</p>}
		</StyledHeaderContainer>
	);
}

export default Header;
