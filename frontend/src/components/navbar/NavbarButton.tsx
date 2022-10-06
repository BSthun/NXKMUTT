import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonBase, Theme } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import PropTypes from 'prop-types'
import React from 'react'
import DelayLink from '../routing/DelayLink'

const NavbarButton = ({ to, fa, text }) => {
	const classes = useStyles()
	return (
		<DelayLink
			to={to}
			className={classes.link}
		>
			<ButtonBase className={classes.button}>
				<FontAwesomeIcon
					icon={fa}
					className={classes.fa}
				/>{' '}
				{text}
			</ButtonBase>
		</DelayLink>
	)
}

const useStyles = makeStyles((theme: Theme) => ({
	link: {
		textDecoration: 'none',
		marginLeft: theme.spacing(2),
	},
	button: {
		padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
		color: theme.palette.text.primary,
		border: '1px solid transparent',
		borderRadius: 1000,
		transition: '0.3s all',
		'&:hover': {
			border: `1px solid ${theme.palette.text.primary}`,
		},
		[theme.breakpoints.down('md')]: {
			width: '100%',
			margin: `${theme.spacing(2)} 0`,
			border: `1px solid ${theme.palette.text.primary}`,
		},
	},
	fa: {
		marginRight: theme.spacing(2),
	},
}))

NavbarButton.propTypes = {
	to: PropTypes.string.isRequired,
	fa: PropTypes.object.isRequired,
}

export default NavbarButton
