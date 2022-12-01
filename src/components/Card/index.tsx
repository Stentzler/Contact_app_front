import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {StyledCardBtnContainer, Wrapper} from './styles';
import ContactEditModal from '../ContactEditModal';
import ContactDeleteModal from '../ContactDeleteModal';

interface IProps {
	user_name: any;
}
export default function ContactCard({user_name}: IProps) {
	const x = user_name;
	return (
		<Box
			sx={{
				width: 380,
				borderRadius: 12,
				'&:hover': {
					opacity: [0.9, 0.9, 0.95],
				},
			}}
		>
			<Card
				variant='outlined'
				style={{backgroundColor: '#f4f4f4', borderRadius: '12px'}}
			>
				<React.Fragment>
					<CardContent>
						<Wrapper>
							<h3>{x}</h3>
							<Typography sx={{mb: 1.5, color: '#000'}}>
								<span>Nome:</span> {x}
							</Typography>
							<Typography sx={{mb: 1.5, color: '#000'}}>
								<span>Email:</span> {x}@gmail.com
							</Typography>
							<Typography sx={{mb: 1.5, color: '#000'}}>
								<span>Telefone:</span> {x}41-1233-2342
							</Typography>
							<Typography sx={{mb: 1.5, color: '#000'}}>
								<span>Fixo:</span> {x}41-1233-1231
							</Typography>
						</Wrapper>
					</CardContent>

					<StyledCardBtnContainer>
						<ContactEditModal />
						<ContactDeleteModal />
					</StyledCardBtnContainer>
				</React.Fragment>
			</Card>
		</Box>
	);
}
