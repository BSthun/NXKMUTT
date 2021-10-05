
import { Box, Checkbox, Typography,Stack, Slider, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import React, { useEffect, useRef, useState } from 'react';
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

// const CustomRadio = withStyles({
// 	root: {
// 		color: '#FFB740',
// 		'&$checked': {
// 			color: '#FFB740',
// 		},
// 	},
// 	checked: {},
// })((props) => <Radio color="default" {...props} />);

const FilterContent = () => {
	const classes = useStyles();
	// const theme = useTheme();
	const [selectedType,setSelectedType] = useState([]);
	const [years,setyears] = useState(rangeYear)
	const [technology,settechnology] = useState([]);
	const [theme,settheme] = useState([]);
	const [t] = useTranslation('content');
	const ref = useRef()

	const handlechange = (_,newvalue)=>setyears(newvalue);
	const submit = ()=>{
		const data = {types:selectedType,year:years,technology,theme}
		console.log(data)
	}
	const [yearWidth,setyearWidth] = useState(0)
	useEffect(()=>{
		setyearWidth(ref.current.offsetWidth-30)

	},[])
	useEffect(()=>{
		const changeHight = ()=>{
			setTimeout(() => {
			setyearWidth(ref.current.offsetWidth-30)
				
			}, 100);
		}
		window.addEventListener('resize',changeHight)
		return ()=>window.addEventListener('resize',changeHight)
	},[])
	return (
		<Box className={classes.section} ref={ref}>
			<Typography variant="h6" color="textPrimary">{t('filter')}</Typography>
			{/*Type*/}
			<FilterBox text="type">
			{types.map((type) => {
						return (
							<Box display="flex" className={classes.hoverBox}  key={type}
							onClick={selectedType.includes(type) ? ()=>setSelectedType(selectedType.filter(item=>item!==type)) : ()=>setSelectedType([...selectedType,type])} 
							alignItems="center">
								<CustomCheckbox  checked={selectedType.includes(type)} />
								<Typography variant="p" color="textPrimary">{t(type)}</Typography>
							</Box>
						);
					})}
			</FilterBox>




			{/*Publish year*/}
			<Box>
			<FilterBox text="publish-year">
				<Box width={yearWidth} height="100px" boxSizing="border-box" p={5} mt={5}>
			<Slider step={1} 
			value={years} 
			max={rangeYear[1]} 
			min={rangeYear[0]} 
			valueLabelDisplay="on" 
			onChange={handlechange} 
			marks={[{value:rangeYear[0],label:rangeYear[0]},{value:rangeYear[1],label:rangeYear[1]}]}
			width="100%"
			></Slider>
			</Box>
			</FilterBox>
			</Box>
			{/*technology*/}


			<FilterBox text="technology">
			<Stack direction="row" gap={1} justifyContent="flex-start"  flexWrap="wrap"  >
			{['EEG', 'MRI', 'fNIR' , 'Eye tracking', 'Psychophysics', 'Physiology', 'Behavioral methods', 'Brain stimulation', 'Computational models', 'Human Computer Ineteraction', 'Machine learning']
			.map(item=><TagChip key={item} name={item} value={technology} setvalue={settechnology}  />)}
			</Stack>
			</FilterBox>

			{/* theme */}
			<FilterBox text="theme">
			<Stack direction="row" gap={1} justifyContent="flex-start" spacing={2} flexWrap="wrap" >
			{['Cognitive Neuroscience', 'Developmental Neuroscience','Computational Neuroscience','Clinical Neuroscience', 'Neurobiology', 'Neuroeconmics']
			.map(item=><TagChip key={item} value={theme} setvalue={settheme} name={item}/>)}
			</Stack>
			</FilterBox>

			<Button variant="contained" color="secondary" style={{marginTop:20,borderRadius:"30px"}} onClick={submit} >{t('search')}</Button>

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