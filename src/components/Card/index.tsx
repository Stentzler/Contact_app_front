import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {StyledCardBtnContainer, Wrapper} from './styles';
import ContactEditModal from '../ContactEditModal';
import ContactDeleteModal from '../ContactDeleteModal';

interface IProps {
	contactData: any;
}
export default function ContactCard({contactData}: IProps) {
	const firstName = contactData.fullName.split(' ')[0];

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
							<h3>{firstName}</h3>
							<Typography sx={{mb: 1.5, color: '#000'}}>
								<span>Nome:</span> {contactData.fullName}
							</Typography>
							<Typography sx={{mb: 1.5, color: '#000'}}>
								<span>Email:</span> {contactData.email}
							</Typography>
							<Typography sx={{mb: 1.5, color: '#000'}}>
								<span>Telefone:</span> {contactData.mobilePhone}
							</Typography>
							<Typography sx={{mb: 1.5, color: '#000'}}>
								<span>Fixo:</span> {contactData.phone}
							</Typography>
						</Wrapper>
					</CardContent>

					<StyledCardBtnContainer>
						<ContactEditModal contactData={contactData} />
						<ContactDeleteModal contactData={contactData} />
					</StyledCardBtnContainer>
				</React.Fragment>
			</Card>
		</Box>
	);
}
