import styled from 'styled-components';

export const StyledEditContactForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 28px;
	padding: 0 18px;

	min-width: 380px;

	button {
		margin: auto;
	}

	.MuiFormHelperText-root.Mui-error {
		height: 0;
		margin: 0;
	}

	@media (max-width: 500px) {
		width: 80%;
	}
`;
