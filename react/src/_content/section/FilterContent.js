
import { Box, Checkbox, Radio, Typography, useTheme,Stack, Slider, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TagChip from './components/TagChip';
import FilterBox from './components/FilterBox';

const types = ['Preprints', 'Peer-reviewed publications', 'Conference papers','Invited talks','Poster presentations'];
const rangeYear = [2020,2025];

const CustomCheckbox = withStyles({
	root: {
		color: '#FFB740',
		'&$checked': {
			color: '#FFB740',
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CustomRadio = withStyles({
	root: {
		color: '#FFB740',
		'&$checked': {
			color: '#FFB740',
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />);

const FilterContent = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [selectedValue, setSelectedValue] = React.useState('2020');
	const [selectedType,setSelectedType] = useState([]);
	const [years,setyears] = useState(rangeYear)
	const [t] = useTranslation('content');

	const handlechange = (_,newvalue)=>setyears(newvalue);
	
	return (
		<Box className={classes.section}>
			<Typography variant="h6" color="textPrimary">{t('filter')}</Typography>
			{/*Type*/}
			<FilterBox text="type">
			{types.map((type) => {
						return (
							<Box display="flex" className={classes.hoverBox} 
							onClick={selectedType.includes(type) ? ()=>setSelectedType(selectedType.filter(item=>item!==type)) : ()=>setSelectedType([...selectedType,type])} 
							alignItems="center">
								<CustomCheckbox  checked={selectedType.includes(type)} />
								<Typography variant="p" color="textPrimary">{t(type)}</Typography>
							</Box>
						);
					})}
			</FilterBox>




			{/*Publish year*/}
			<FilterBox text="publish-year">
			<Slider step={1} valueLabelDisplay="auto" value={years} max={rangeYear[1]} min={rangeYear[0]} onChange={handlechange} marks={[{value:rangeYear[0],label:rangeYear[0]},{value:rangeYear[1],label:rangeYear[1]}]} ></Slider>
			</FilterBox>
			{/*technology*/}
			<FilterBox text="technology">
			<Stack direction="row" gap={2} justifyContent="space-between" spacing={2} flexWrap="wrap" >
			{['EEG', 'MRI', 'fNIR' , 'Eye tracking', 'Psychophysics', 'Physiology', 'Behavioral methods', 'Brain stimulation', 'Computational models', 'Human Computer Ineteraction', 'Machine learning'].map(item=><TagChip key={item} name={item}/>)}
			</Stack>
			</FilterBox>

			{/* theme */}
			<FilterBox text="theme">
			<Stack direction="row" gap={2} justifyContent="space-between" spacing={2} flexWrap="wrap" >
			{['Cognitive Neuroscience', 'Developmental Neuroscience','Computational Neuroscience','Clinical Neuroscience', 'Neurobiology', 'Neuroeconmics'].map(item=><TagChip key={item} name={item}/>)}
			</Stack>
			</FilterBox>

			<Button variant="contained" color="secondary" style={{marginTop:20,borderRadius:"30px"}} rounded>Search</Button>

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
		'&:hover':{
			cursor:"pointer"
		}
	}
}));

export default FilterContent;