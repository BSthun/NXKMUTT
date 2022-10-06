import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const EducationCard = ({ member }) => {
	const [, i18n] = useTranslation('home')

	return (
		<Card
			variant="outlined"
			sx={{ height: '100%' }}
		>
			<CardContent>
				<Typography
					variant="h5"
					color="primary"
					fontWeight="600"
					mb={3}
				>
					Educations
				</Typography>
				{member.attributes.educations.map((education, index) => (
					<Stack>
						<Typography
							variant="h6"
							fontWeight={600}
							lineHeight={2}
						>
							{education['degree_' + i18n.language]}
						</Typography>
						<Typography
							variant="body1"
							color="textSecondary"
							lineHeight={2}
						>
							{education['institute_' + i18n.language]}
						</Typography>
					</Stack>
				))}
			</CardContent>
		</Card>
	)
}

export default EducationCard
