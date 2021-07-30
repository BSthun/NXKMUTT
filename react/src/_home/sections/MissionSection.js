import {
	faEllipsisV,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	Container,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { Tween } from 'react-gsap';
import { useTranslation } from 'react-i18next';
import {
	Controller,
	Scene,
} from 'react-scrollmagic';
import CurveButton from '../../components/fork/CurveButton';
import DecoSpotWave from '../../images/decorate/spotwave.svg';

const MissionSection = () => {
	const classes = useStyles();
	const [t] = useTranslation('home');
	
	return (
		<Box bgcolor="background.default" className={classes.root}>
			<Box position="absolute" top={-48} left={-256} width={512} zIndex={2}>
				<Controller>
					<div id="home-mission-deco1" />
					<Scene duration={600} triggerElement="#home-mission-deco1">
						{(progress) => (
							<Tween
								to={{
									rotation: 180,
								}}
								totalProgress={progress}
								paused
							>
								<img alt="Decoration element" src={DecoSpotWave} />
							</Tween>
						)}
					</Scene>
				</Controller>
			</Box>
			<Container maxWidth="lg" className={classes.container}>
				<div>
					<Typography variant="h5" className={classes.title}>ABOUT US</Typography>
					<Box display="flex" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }}>
						<div>
							<Typography variant="body1" color="textPrimary" className={classes.body}>
								Our team investigates neural and computational mechanism that support human perception
								and
								cognitive functions, and study how they develop from children and teenagers to fully
								grown
								adults. Moreover, we study how brain functions decline in aging society.
							</Typography>
							<Box display="flex" justifyContent="center" paddingBottom={4}>
								<CurveButton minWidth={142} marginRight={16}>
									<FontAwesomeIcon icon={faEllipsisV} /> &nbsp; {t('moredetail')}
								</CurveButton>
								<CurveButton minWidth={142}>
									<FontAwesomeIcon icon={faEnvelope} /> &nbsp; {t('contact')}
								</CurveButton>
							</Box>
						</div>
					</Box>
				</div>
			</Container>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
	},
	container: {
		padding: 16,
		zIndex: 3,
		'& > div': {
			padding: 16,
			borderRadius: theme.shape.borderRadius,
			background: theme.palette.type === 'dark' ? 'linear-gradient(135deg, #140b02, hsla(0,0%,100%,0) 80%)' :
				'linear-gradient(135deg, #ebf4fd, hsla(0,0%,100%,0) 80%)',
			backdropFilter: `blur(6px) brightness(${theme.palette.type === 'dark' ? '8' : '12'}0%)`,
		},
	},
	title: {
		margin: '32px auto',
		textAlign: 'center',
		fontWeight: 500,
		color: '#448aff', // Mui color palette : Blue A200
	},
	body: {
		paddingBottom: 32,
	},
}));

export default MissionSection;
