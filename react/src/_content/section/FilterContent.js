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
	useRef,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import FilterBox from './components/FilterBox';
import TagChip from './components/TagChip';

const types = ['Preprints', 'Peer-reviewed publications', 'Conference papers', 'Invited talks', 'Poster presentations'];
const rangeYear = [new Date().getFullYear(), 2010];

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
	const [selectedTypes, setSelectedTypes] = useState([]);
	const [years, setyears] = useState(rangeYear);
	const [technology, settechnology] = useState([]);
	const [theme, settheme] = useState([]);
	const [t] = useTranslation('content');
	const ref = useRef();
	
	const handlechange = (_, newvalue) => setyears(newvalue);
	const submit = () => {
		const data = { types: selectedTypes, year: years, technology, theme };
		console.log(data);
	};
	
	return (
		<Box className={classes.section} ref={ref}>
			<Typography variant="h6" color="textPrimary">{t('filter')}</Typography>
			
			{/* Type */}
			<FilterBox text="type">
				{types.map((type) => {
					return (
						<Box display="flex" className={classes.hoverBox} key={type}
						     onClick={
							     selectedTypes.includes(type) ?
								     () => setSelectedTypes(selectedTypes.filter(item => item !== type)) :
								     () => setSelectedTypes([...selectedTypes, type])
						     }
						     alignItems="center"
						>
							<CustomCheckbox checked={selectedTypes.includes(type)} />
							<Typography variant="p" color="textPrimary">{t(type)}</Typography>
						</Box>
					);
				})}
			</FilterBox>
			
			{/* Publish year */}
			<FilterBox text="publish-year">
				<Box width={160} height={100} boxSizing="border-box" p={5} mt={5}>
					<Slider step={1}
					        value={years}
					        max={rangeYear[0]}
					        min={rangeYear[1]}
					        size="small"
					        valueLabelDisplay="on"
					        onChange={handlechange}
					        marks={[
						        { value: rangeYear[0], label: rangeYear[0] },
						        { value: rangeYear[1], label: rangeYear[1] },
					        ]}
					        width="100%"
					/>
				</Box>
			</FilterBox>
			
			{/* Technology */}
			<FilterBox text="technology">
				<Stack direction="row" gap={1} justifyContent="flex-start" flexWrap="wrap">
					{[
						'EEG',
						'MRI',
						'fNIR',
						'Eye tracking',
						'Psychophysics',
						'Physiology',
						'Behavioral methods',
						'Brain stimulation',
						'Computational models',
						'Human Computer Ineteraction',
						'Machine learning',
					]
						.map(item => <TagChip key={item} name={item} value={technology} setvalue={settechnology} />)}
				</Stack>
			</FilterBox>
			
			{/* Theme */}
			<FilterBox text="theme">
				<Stack direction="row" gap={1} justifyContent="flex-start" spacing={2} flexWrap="wrap">
					{[
						'Cognitive Neuroscience',
						'Developmental Neuroscience',
						'Computational Neuroscience',
						'Clinical Neuroscience',
						'Neurobiology',
						'Neuroeconmics',
					]
						.map(item => <TagChip key={item} value={theme} setValue={settheme} name={item} />)}
				</Stack>
			</FilterBox>
			
			<Button variant="contained"
			        color="secondary"
			        style={{ marginTop: 20, borderRadius: '30px' }}
			        onClick={submit}
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