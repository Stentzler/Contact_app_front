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
	}

	.menu-items {
		padding: 32px 7px;
		display: flex;
		flex-direction: column;
		gap: 32px;
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
		padding: 18px 12px 18px 52px;
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

	svg {
		transform: translateY(2px);
	}

	@media (max-width: 1300px) {
		width: 980px;
	}
`;
