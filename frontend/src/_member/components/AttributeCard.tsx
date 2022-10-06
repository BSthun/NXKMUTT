import { Box, Card, CardContent, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AttributeCard = ({ attr }) => {
	const [, i18n] = useTranslation('home')

	return (
		<Card variant="outlined" sx={{ height: '100%' }}>
			<CardContent>
				<Box>
					<Typography
						variant="h5"
						color="primary"
						fontWeight="600"
						mb={3}
					>
						{attr.attr['title_' + i18n.language]}
					</Typography>
					{attr.attr.mode === 'bullet' ? (
						attr.attr['value_' + i18n.language]
							.split('\n')
							.map((el) => (
								<ListItemText
									sx={{ display: 'list-item', marginLeft: 8 }}
								>
									<Typography variant="body1" key={el}>
										{el}
									</Typography>
								</ListItemText>
							))
					) : (
						<Typography variant="body1" component="div">
							{attr.attr['value_' + i18n.language]}
						</Typography>
					)}
				</Box>
			</CardContent>
		</Card>
	)
}

export default AttributeCard
