import styled from 'styled-components';

export const StyledContainerAgenda = styled.div`
	width: 1280px;
	height: 100%;
	display: flex;

	.user-menu {
		width: 28%;
		padding: 20px 12px;
		background-color: azure;
		margin: auto;
		background-color: rgba(0, 0, 0, 0.1);
		border: 2px solid #000;
		border-radius: 12px;

		.profile {
			display: flex;
			gap: 12px;

			svg {
				transform: translateY(1px);
			}
		}
	}

	.menu-items {
		padding: 32px 7px;
		display: flex;
		flex-direction: column;
		gap: 32px;

		svg {
			transform: translateY(2px);
		}

		.menu-btn {
			display: inline-block;
			color: var(--dark);
			flex-basis: 20px;
			transition: all 0.4s;

			&:hover {
				cursor: pointer;
				color: #000;
				transform: translate(8px, 0);
			}
		}
	}

	.user-contacts {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 20px 12px;
		height: 93%;
		width: 72%;
	}

	.user-contacts > input {
		margin: 10px 0;
	}

	.card-container {
		padding: 28px 12px 28px 52px;
		width: 100%;
		gap: 28px;
		display: flex;
		justify-content: flex-start;

		flex-wrap: wrap;
		overflow-y: auto;
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 12px;
	}

	.card-container::-webkit-scrollbar {
		width: 10px;
	}

	.card-container::-webkit-scrollbar-track {
		background-color: #666666;
		border-radius: 12px;
	}

	.card-container::-webkit-scrollbar-thumb {
		background-color: #bbb;
		border-radius: 100px;
		z-index: 100;
	}

	.card-container::-webkit-scrollbar-thumb:hover {
		background: #a1a1a1;
	}

	.input-container {
		width: 270px;
		margin-bottom: 16px;
		margin-top: 8px;
		display: flex;

		input {
			width: 100%;
			padding: 8px 16px;
			border: 2px solid #000;
			border-radius: 25px;
			background-color: #f4f4f4;
			transition: all 0.3s;
		}

		input:placeholder-shown {
			border-color: #ccc;
		}

		svg {
			color: #000;
			position: relative;
			right: 34px;
			top: 10px;
			transition: all 0.3s;
		}

		input:placeholder-shown ~ svg {
			color: #ccc;
		}
	}

	@media (max-width: 1300px) {
		width: 980px;
	}
`;
