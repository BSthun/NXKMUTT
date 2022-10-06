import {
	faBrain,
	faEye,
	faTint,
	faWater,
	faXRay,
} from '@fortawesome/free-solid-svg-icons'
import { Box, darken, lighten } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import React from 'react'
import BottomSlab from '../../components/decorate/BottomSlab'
import ImgDlBrainCell from '../../images/download/braincell.jpg'
import ImgDlBrainMri from '../../images/download/brainmri.jpeg'
import ImgDlBrainSti from '../../images/download/brainsti.jpeg'
import ImgDlEegWave from '../../images/download/eegwave.jpeg'
import ImgDlEye from '../../images/download/eye.jpeg'
import MethodItem from '../components/MethodItem'
import Title from '../components/Title'

const MethodSection = () => {
	const classes = useStyles()

	return (
		<Box
			bgcolor="background.default"
			paddingTop={6}
			paddingBottom={32}
			position="relative"
		>
			<Title color="#e040fb" /* purple A200 */>
				NEUROSCIENCE & COMPUTATIONAL TECHNIQUES
			</Title>
			<Box
				position="relative"
				width={{ xs: 288, lg: 1280 }}
				height={{ xs: 1640, lg: 750 }}
				margin="auto"
			>
				<MethodItem
					image={ImgDlEegWave}
					fa={faWater}
					title="EEG"
					subtitle="Perfect anyway"
					styles={{ top: { xs: 0, lg: 0 }, left: { lg: 50 } }}
				/>
				<MethodItem
					image={ImgDlEye}
					fa={faEye}
					title="Eye tracking"
					subtitle="Perfect anyway"
					styles={{ top: { xs: 330, lg: 0 }, left: { lg: 460 } }}
				/>
				<MethodItem
					image={ImgDlBrainCell}
					fa={faTint}
					title="fNIR"
					subtitle="Perfect anyway"
					styles={{ top: { xs: 660, lg: 0 }, left: { lg: 870 } }}
				/>
				<MethodItem
					image={ImgDlBrainMri}
					fa={faXRay}
					title="fMRI"
					subtitle="Perfect anyway"
					styles={{ top: { xs: 990, lg: 350 }, left: { lg: 255 } }}
				/>
				<MethodItem
					image={ImgDlBrainSti}
					fa={faBrain}
					title="Brain Stimulation"
					subtitle="Perfect anyway"
					styles={{ top: { xs: 1320, lg: 350 }, left: { lg: 665 } }}
				/>
			</Box>
			<BottomSlab className={classes.slab} />
		</Box>
	)
}

const useStyles = makeStyles((theme) => ({
	slab: {
		backgroundColor:
			theme.palette.mode === 'dark'
				? lighten(theme.palette.background.default, 0.05)
				: darken(theme.palette.background.default, 0.03),
	},
}))
export default MethodSection
