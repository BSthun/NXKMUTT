import makeStyles from '@mui/styles/makeStyles'
import PropTypes from 'prop-types'
import React from 'react'
import HeaderSlabMask from '../../images/mask/headerslab.svg'
import { Theme } from '@mui/material'

const BottomSlab = ({ className }) => {
	const classes = useStyles()

	return (
		<div
			className={
				className ? `${className} ${classes.slab}` : classes.slab
			}
		/>
	)
}

const useStyles = makeStyles((theme: Theme) => ({
	slab: {
		position: 'absolute',
		bottom: -1,
		width: '100%',
		height: 'calc(5 / 32 * 100vw)',
		maxHeight: theme.spacing(48),
		maskImage: `url(${HeaderSlabMask})`,
		maskSize: '100% 100%',
		backgroundColor: theme.palette.background.default,
	},
}))

BottomSlab.propTypes = {
	className: PropTypes.string,
}

export default BottomSlab
