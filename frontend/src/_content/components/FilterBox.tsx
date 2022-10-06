import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Stack, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import React, { useRef, useState } from 'react'

const FilterBox = ({ children, text }) => {
	const classes = useStyles()

	const [opened, setOpened] = useState(false)
	const contentRef = useRef()

	return (
		<Box className={classes.filterBox}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ marginY: 2 }}
			>
				<Typography variant="p" color="textPrimary">
					{text}
				</Typography>
				<Button
					sx={{ minWidth: 0, paddingX: 2, paddingY: 1.5 }}
					variant="outlined"
					onClick={() => setOpened(!opened)}
				>
					<FontAwesomeIcon icon={opened ? faMinus : faPlus} />
				</Button>
			</Stack>
			<Box
				height={opened ? contentRef.current?.offsetHeight : 0}
				style={{ transition: '0.25s all', marginTop: 10 }}
				overflow="hidden"
				width="fit-content"
			>
				<Box className={classes.subTitle} ref={contentRef}>
					{children}
				</Box>
			</Box>
		</Box>
	)
}

const useStyles = makeStyles((theme) => ({
	section: {
		display: 'flex',
		flexDirection: 'column',
		margin: '50px 10px 0 20px',
		padding: '0 40px 0 0',
		height: 'auto',
		[theme.breakpoints.up('lg')]: {
			borderRight: `2px ${theme.palette.text.primary} solid`,
		},
	},
	filterBox: {
		height: 'auto',
		width: '100%',
	},
	filterTitle: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between',
		cursor: 'pointer',
	},
	subTitle: {
		display: 'flex',
		flexDirection: 'column',
	},
	tagsTitle: {
		marginLeft: '10px',
	},
	tagBox: {
		display: 'flex',
		alignItems: 'center',
		height: 40,
		padding: '0 20px',
		borderRadius: theme.shape.borderRadius,
		cursor: 'pointer',
		justifyContent: 'center',
		marginBottom: 10,
		width: 100,
		[theme.breakpoints.down('sm')]: {
			width: 150,
		},
	},
}))

export default FilterBox
