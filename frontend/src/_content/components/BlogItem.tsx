import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack, Theme, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({
	title,
	description,
	date,
	background,
	to,
	height = false,
	index = 0,
}) => {
	const [image, setImage] = useState('')
	const [loaded, setLoaded] = useState(false)
	const classes = useStyles({
		background: image,
		height,
	})

	useLayoutEffect(() => {
		if (!title) return
		const img = new Image()
		img.src = background
		img.onload = () => {
			setTimeout(() => {
				setLoaded(true)
				setImage(background)
			}, index * 100)
		}
	}, [index, title, background])

	return (
		<Link
			to={to}
			className={classes.root}
			style={{
				opacity: loaded ? 1 : 0,
				transition: 'opacity 1s ease-in-out',
			}}
		>
			<div className={classes.overlay} />
			<Stack
				padding={4}
				justifyContent="flex-end"
				zIndex={2}
			>
				<Typography
					variant="h6"
					component="b"
					color="white"
					mb={2}
				>
					{title}
				</Typography>
				<Typography
					variant="body1"
					color="white"
					gutterBottom
				>
					{description}
				</Typography>
				<Typography
					variant="body2"
					color="white"
				>
					<FontAwesomeIcon icon={faCalendar} />
					&nbsp; {date}
				</Typography>
			</Stack>
		</Link>
	)
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: 'relative',
		width: '100%',
		height: ({ height }: any) => (height ? '100%' : 250),
		minHeight: 250,
		backgroundImage: ({ background }) => `url(${background})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		borderRadius: theme.spacing(2),
		overflow: 'hidden',
		display: 'flex',
	},
	overlay: {
		position: 'absolute',
		zIndex: 0,
		left: 0,
		right: 0,
		bottom: 0,
		height: '100%',
		maxHeight: 256,
		background:
			'linear-gradient(0deg, rgba(5, 5, 5, 1) 0%, rgba(10, 10, 10, 0) 100%)',
	},
}))

BlogItem.propTypes = {}

export default BlogItem
