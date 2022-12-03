import styled from 'styled-components';

export const StyledDiv = styled.div`
	form {
		height: 275px;
		width: 400px;
		display: flex;

		flex-direction: column;
		justify-content: space-between;
		gap: 12px;

		border: 3px solid var(--border);
		border-radius: 12px;
		padding: 18px 22px;
		background-color: #fff;
		box-shadow: 1px 1px 4px #2f2e41;

		.input-container {
			width: 100%;
			height: 65%;
			display: flex;
			flex-direction: column;
			gap: 32px;
		}

		button {
			margin: 0 auto 18px auto;
		}

		.MuiFormHelperText-root.Mui-error {
			height: 0;
			margin: 0;
		}
	}

	.register {
		top: -36px;
		position: relative;
		text-align: center;
		a {
			font-size: 14px;
			margin: auto;
			&:hover {
				cursor: pointer;
			}
		}
	}

	@media (max-width: 500px) {
		width: 80%;
	}
`;
