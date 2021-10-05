import {
	Box,
	Button,
	Checkbox,
	Slider,
	Stack,
	Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import React, {
	useContext,
	useEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { FloatingContext } from '../../contexts/FloatingContext';
import axios from '../../utils/axios';
import FilterBox from './components/FilterBox';
import TagChip from './components/TagChip';

const rangeYear = [2010, new Date().getFullYear()];

const CustomCheckbox = withStyles({
	root: {
		color: '#FFB740',
		'&$checked': {
			color: '#FFB740',
		},
	},
	checked: {
		color: '#FFB740',
	},
})((props) => <Checkbox {...props} />);

const FilterContent = () => {
	const classes = useStyles();
	const [t] = useTranslation('content');
	const { openSnackBar } = useContext(FloatingContext);
	const [tags, setTags] = useState({
		types: [],
		techniques: [],
		theme: [],
	});
	
	const [selectedYears, setSelectedYears] = useState(rangeYear);
	const [selectedTypes, setSelectedTypes] = useState([]);
	const [selectedTechniques, setSelectedTechniques] = useState([]);
	const [selectedThemes, setSelectedThemes] = useState([]);
	
	// Load tags
	useEffect(() => {
		axios
			.get('/tags')
			.then((response) => {
				setTags({
					types: response.data.filter((el) => el.category === 'type'),
					techniques: response.data.filter((el) => el.category === 'technique'),
					theme: response.data.filter((el) => el.category === 'theme'),
				});
			})
			.catch((error) => openSnackBar(error.message));
	}, [openSnackBar]);
	
	const search = () => {
		console.log(selectedYears, selectedTypes, selectedTechniques, selectedThemes);
	};
	return (
		<Box className={classes.section}>
			<Typography variant="h6" color="textPrimary">{t('filter')}</Typography>
			
			{/* Publish year */}
			<FilterBox text="publish-year">
				<Box
					width={{ xs: 'calc(100vw - 120px)', md: 160 }}
					height={100} boxSizing="border-box"
					p={5}
					mt={5}
				>
					<Slider step={1}
					        value={selectedYears}
					        min={rangeYear[0]}
					        max={rangeYear[1]}
					        size="small"
					        valueLabelDisplay="on"
					        onChange={(_, value) => setSelectedYears(value)}
					        marks={[
						        { value: rangeYear[0], label: rangeYear[0] },
						        { value: rangeYear[1], label: rangeYear[1] },
					        ]}
					        width="100%"
					/>
				</Box>
			</FilterBox>
			
			{/* Type */}
			<FilterBox text="type">
				{tags.types.map((type) => {
					return (
						<Box display="flex"
						     className={classes.hoverBox}
						     key={type}
						     alignItems="center"
						     onClick={
							     selectedTypes.includes(type) ?
								     () => setSelectedTypes(selectedTypes.filter(item => item !== type)) :
								     () => setSelectedTypes([...selectedTypes, type])
						     }
						>
							<CustomCheckbox checked={selectedTypes.includes(type)} />
							<Typography variant="p" color="textPrimary">{t(type)}</Typography>
						</Box>
					);
				})}
			</FilterBox>
			
			{/* Technology */}
			<FilterBox text="technology">
				<Stack direction="row" gap={1} justifyContent="flex-start" flexWrap="wrap">
					{
						tags.techniques.map((item) =>
							<TagChip
								key={item.slug}
								item={item}
								setSelected={setSelectedTechniques}
							/>,
						)
					}
				</Stack>
			</FilterBox>
			
			{/* Theme */}
			<FilterBox text="theme">
				<Stack direction="row" gap={1} justifyContent="flex-start" spacing={2} flexWrap="wrap">
					{
						tags.theme.map((item) =>
							<TagChip
								key={item.slug}
								item={item}
								setSelected={setSelectedThemes}
							/>,
						)
					}
				</Stack>
			</FilterBox>
			
			<Button variant="contained"
			        color="secondary"
			        style={{ marginTop: 20, borderRadius: '30px' }}
			        onClick={search}
			>
				{t('search')}
			</Button>
		</Box>
	);
};

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
		padding: '15px 0px 5px 0px',
		height: 'auto',
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
		padding: '10px 0px 0px 20px',
	},
	plusIcon: {
		color: theme.palette.text.primary,
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
	hoverBox: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
}));

export default FilterContent;