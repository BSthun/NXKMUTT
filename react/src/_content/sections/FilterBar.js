import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	Button,
	Checkbox,
	CircularProgress,
	Slider,
	Stack,
	TextField,
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
import { useHistory } from 'react-router-dom';
import SectionTitle from '../../components/layout/SectionTitle';
import { FloatingContext } from '../../contexts/FloatingContext';
import { strapiAxios } from '../../utils/axios';
import FilterBox from '../components/FilterBox';
import TagChip from '../components/TagChip';

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

const FilterBar = () => {
	const classes = useStyles();
	const history = useHistory();
	const { openSnackBar } = useContext(FloatingContext);
	const [t] = useTranslation('content');
	
	const [tags, setTags] = useState(null);
	
	const [selectedQuery, setSelectedQuery] = useState('');
	const [selectedYears, setSelectedYears] = useState(rangeYear);
	const [selectedTypes, setSelectedTypes] = useState([]);
	const [selectedTechniques, setSelectedTechniques] = useState([]);
	const [selectedThemes, setSelectedThemes] = useState([]);
	
	useEffect(() => {
		strapiAxios
			.get('/api/tags')
			.then((response) => {
				setTags({
					types: response.data.data.filter((el) => el.attributes.category === 'type'),
					techniques: response.data.data.filter((el) => el.attributes.category === 'technique'),
					theme: response.data.data.filter((el) => el.attributes.category === 'theme'),
				});
			})
			.catch((error) => {
				openSnackBar(error.message);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	const search = () => {
		strapiAxios
			.post(
				'/content/search',
				{
					year_start: selectedYears[0],
					year_end: selectedYears[1],
					type_tags: selectedTypes.map((el) => el.id),
					technique_tags: selectedTechniques.map((el) => el.id),
					theme_tags: selectedThemes.map((el) => el.id),
					query: selectedQuery,
				})
			.then(({ data }) => {
				if (data.data.length === 0) {
					openSnackBar('No search result found');
					return;
				}
				history.push(`/content/?result=${data.data.join(',')}&page=1`);
			})
			.catch((error) => {
				openSnackBar(error.message);
			});
	};
	
	return (
		<div className={classes.root}>
			<SectionTitle title={t('filter')} />
			
			<TextField
				label={t('search')}
				size="small"
				sx={{ marginBottom: 4 }}
				InputProps={{
					endAdornment: <FontAwesomeIcon icon={faSearch} />,
				}}
				onChange={(e) => setSelectedQuery(e.target.value)}
			/>
			
			{
				tags ?
					<>
						{/* Publish year */}
						<FilterBox text={t('publish-year')}>
							<Box
								width={{ xs: 'calc(100vw - 64px)', md: 259 }}
								height={100} boxSizing="border-box"
								p={5}
								mt={5}
							>
								<Slider
									step={1}
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
						<FilterBox text={t('type')}>
							{tags.types.map((type) => {
								return (
									<Box display="flex"
									     className={classes.hoverBox}
									     key={type.id}
									     alignItems="center"
									     onClick={
										     selectedTypes.includes(type) ?
											     () => setSelectedTypes(selectedTypes.filter(item => item !== type)) :
											     () => setSelectedTypes([...selectedTypes, type])
									     }
									>
										<CustomCheckbox checked={selectedTypes.includes(type)} />
										<Typography variant="p" color="textPrimary">{type.attributes.name}</Typography>
									</Box>
								);
							})}
						</FilterBox>
						
						{/* Technology */}
						<FilterBox text={t('technique')}>
							<Stack direction="row" gap={1} justifyContent="flex-start" flexWrap="wrap">
								{
									tags.techniques.map((item) =>
										<TagChip
											key={item.id}
											item={item}
											setSelected={setSelectedTechniques}
										/>,
									)
								}
							</Stack>
						</FilterBox>
						
						{/* Theme */}
						<FilterBox text={t('theme')}>
							<Stack direction="row" gap={1} justifyContent="flex-start" spacing={2} flexWrap="wrap">
								{
									tags.theme.map((item) =>
										<TagChip
											key={item.id}
											item={item}
											setSelected={setSelectedThemes}
										/>,
									)
								}
							</Stack>
						</FilterBox>
					</> :
					<Box display="flex" justifyContent="center" paddingTop="20px">
						<CircularProgress />
					</Box>
			}
			
			<Button
				variant="contained"
				sx={{ marginTop: 5, borderRadius: '30px' }}
				onClick={search}
			>
				{t('search')}
			</Button>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: '50px 20px',
		height: '100%',
		width: 260,
		[theme.breakpoints.down('md')]: {
			width: 'calc(100% - 36px)',
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

export default FilterBar;