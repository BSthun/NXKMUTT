import { useDesktop, useMobile } from '@/hooks/useDevices'
import { delay } from '@/utils/object'
import makeStyles from '@mui/styles/makeStyles'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useEffect, useRef, useState } from 'react'
import BottomSlab from '../../components/decorate/BottomSlab'

const MAX_PAGE = 4
const TIMEOUT_SECOND = 10

const TopicSection = () => {
	const parallaxRef = useRef(null)
	const classes = useStyles()
	const timer = useRef(null)
	const interactTimeout = useRef(null)
	const [index, setIndex] = useState(0)
	const [isAutoScrolling, setIsAutoScrolling] = useState(true)
	const isDesktop = useDesktop()
	const decreaseIndex = () => setIndex((index) => (index - 1) % MAX_PAGE)
	const increaseIndex = () => setIndex((index) => (index + 1) % MAX_PAGE)

	const startTimer = () => {
		timer.current = setInterval(() => {
			if (isAutoScrolling && isDesktop) {
				increaseIndex()
			}
		}, 3000)
	}

	useEffect(() => {
		parallaxRef.current.scrollTo(index)
	}, [index])

	const clearTimer = () => {
		if (timer.current) {
			clearInterval(timer.current)
		}
	}

	const userDidInteract = () => {
		setIsAutoScrolling(false)

		if (interactTimeout.current) {
			clearTimeout(interactTimeout.current)
		}

		interactTimeout.current = setTimeout(() => {
			setIsAutoScrolling(true)
		}, TIMEOUT_SECOND * 1e3)
	}

	const userBeginInteract = (forIndex: number) => {
		setIndex(forIndex)
		userDidInteract()
	}

	/** Timer thingy */
	useEffect(() => {
		startTimer()
		return () => clearTimer()
	}, [timer.current])

	const onResized = async () => {
		decreaseIndex()
		await delay(100)
		increaseIndex()
	}

	useEffect(() => {
		window.addEventListener('resize', onResized)
		return () => {
			window.removeEventListener('resize', onResized)
		}
	}, [])

	return (
		<div className={classes.root}>
			<div className={classes.selector}></div>
			<Parallax
				className={classes.parallax}
				ref={parallaxRef}
				pages={4}
				horizontal
			>
				<Page
					text="Neural and computational machanisms of attention, learning, and memory"
					offset={0}
					gradient="pink"
					onClick={() => userBeginInteract(1)}
				/>
				<Page
					text="Neurodevelopment of cognitive functions and rewarded behaviors"
					offset={1}
					gradient="teal"
					onClick={() => userBeginInteract(2)}
				/>
				<Page
					text="The effects on stress and socioeconomic factors on brain functions"
					offset={2}
					gradient="tomato"
					onClick={() => userBeginInteract(3)}
				/>
				<Page
					text="Translational and clinical neuroscience: ADHD/MCI"
					offset={3}
					gradient="pink"
					onClick={() => userBeginInteract(0)}
				/>
			</Parallax>
			<BottomSlab className={classes.slab} />
			<BottomSlab />
		</div>
	)
}

const Page = ({ text, offset, gradient, onClick }) => {
	const isMobile = useMobile()

	return (
		<>
			<ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
				<div className={`slopeBegin ${isMobile && 'mobile'}`} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick}>
				<div
					className={`slopeEnd ${gradient} ${isMobile && 'mobile'}`}
				/>
			</ParallaxLayer>
			<ParallaxLayer
				className="body"
				offset={offset}
				speed={0.3}
				onClick={onClick}
			>
				<div>
					<span>0{offset + 1}</span>
					<span>{text}</span>
				</div>
			</ParallaxLayer>
		</>
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		minHeight: 800,
	},
	selector: {},
	parallax: {
		scrollbarWidth: 'none',

		'& > div > div': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		'& .slopeBegin, .slopeEnd': {
			position: 'absolute',
			width: '170%',
			height: '100%',
			cursor: 'pointer',
		},
		'& .slopeBegin': {
			backgroundColor: '#20232f',
			clipPath: 'polygon(20% 0, 70% 0, 50% 100%, 0% 100%)',
		},
		'& .slopeEnd': {
			clipPath: 'polygon(70% 0, 100% 0, 80% 100%, 50% 100%)',
		},
		'& .slopeBegin.mobile': {
			backgroundColor: '#20232f',
			clipPath: 'polygon(20% 0, 100% 0,0% 110%, 0% 100%)',
		},
		'& .slopeEnd.mobile': {
			clipPath: 'polygon(100% 0, 100% 0, 80% 100%, 0% 100%)',
		},
		'& .pink': {
			background: 'linear-gradient(to right, deeppink 0%, coral 100%)',
		},
		'& .teal': {
			background:
				'linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)',
		},
		'& .tomato': {
			background: 'linear-gradient(to right, tomato 0%, gold 100%)',
		},
		'& .body': {
			'& > div': {
				position: 'relative',
				margin: '72px auto 0 auto',
				width: 'calc(100% - 256px)',
				maxWidth: 1024,
			},
			'& span:first-child': {
				position: 'absolute',
				left: 0,
				bottom: -72,
				zIndex: -1,
				fontSize: 300,
				color: '#545864',
			},
			'& span:last-child': {
				fontSize: 36,
				color: '#d5d7dc',
			},
		},
	},
	slab: {
		top: -1,
		transform: 'scaleY(-1) scaleX(-1)',
	},
}))

export default TopicSection
