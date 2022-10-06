import { ButtonBase } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { alpha } from '@mui/material/styles'
import PropTypes from 'prop-types'
import React from 'react'

const CurveButton = ({ children, marginRight, minWidth }) => {
	const classes = useStyles()

	return (
		<ButtonBase
			className={classes.button}
			style={{ marginRight, minWidth }}
		>
			{children}
		</ButtonBase>
	)
}

const useStyles = makeStyles((theme) => ({
	button: {
		padding: `8px 16px`,
		color: theme.palette.text.primary,
		border: `1px solid ${theme.palette.text.primary}`,
		borderRadius: 1000,
		fontWeight: 500,
		fontSize: '1em',
		transition: '0.3s all',
		'&:hover': {
			backgroundColor: alpha(theme.palette.text.primary, 0.1),
		},
	},
}))

CurveButton.propTypes = {
	children: PropTypes.array.isRequired,
	marginRight: PropTypes.number,
}
export default CurveButton
