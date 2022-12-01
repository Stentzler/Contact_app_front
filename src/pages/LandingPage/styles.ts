import styled from 'styled-components';

export const MainContainer = styled.div`
	max-width: 1260px;
	min-width: 1080px;
	height: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.container__svg {
		width: 100px;
	}
	svg {
		width: 480px;
	}

	@media (max-width: 840px) {
	}
`;
