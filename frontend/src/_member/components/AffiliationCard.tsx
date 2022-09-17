import {
	Card,
	CardContent,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AffiliationCard = ({ member }) => {
	const [, i18n] = useTranslation('home');
	
	return (
		<Card variant="outlined" sx={{ height: '100%' }}>
			<CardContent>
				<Typography variant="h5" color="primary" fontWeight="600" mb={3}>
					Affiliations
				</Typography>
				{
					member.attributes.affliliations?.map((affiliation, index) => (
						<Stack>
							<Typography variant="h6" fontWeight={600} lineHeight={2}>{affiliation.role}</Typography>
							<Typography
								variant="body1"
								color="textSecondary"
								lineHeight={2}
							>
								{affiliation.affiliation.data?.attributes['name_' + i18n.language]}
							</Typography>
						</Stack>
					))
				}
			</CardContent>
		</Card>
	);
};

export default AffiliationCard;
