import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import SpiralangleDark from '../../images/abstract/spiralangle-dark.svg'
import SpiralangleLight from '../../images/abstract/spiralangle-light.svg'

const PageBanner = ({ title, breadcrumbs }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Box
					display="flex"
					flexDirection="column"
					marginLeft={{ xs: 10, md: 0 }}
				>
					<Typography color="text.primary" variant="h4">
						{title}
					</Typography>
					<Breadcrumbs>
						{breadcrumbs.map((el) => (
							<Link key={el.href} to={el.href}>
								{el.text}
							</Link>
						))}
						<Typography color="text.primary">{title}</Typography>
					</Breadcrumbs>
				</Box>
			</Container>
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: 64,
		width: '100%',
		height: 128,
		backgroundImage: `url(${
			theme.palette.mode === 'dark' ? SpiralangleDark : SpiralangleLight
		})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}))

PageBanner.propTypes = {
	title: PropTypes.string.isRequired,
	breadcrumbs: PropTypes.array.isRequired,
}

export default PageBanner
