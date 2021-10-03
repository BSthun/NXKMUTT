import {
	faHashtag,
	faMinus,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Checkbox, Radio, Typography, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const types = ['blog', 'paper', 'publication'];
const year = ['2020', '2021'];

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
	const [filterClicked, setFilterClicked] = useState({
		type: false,
		year: false,
		tags: false,
	});
	const [selectedTag, setSelectedTag] = useState({
		eeg: false,
		mri: true,
		etc: false,
	});
	const [t] = useTranslation('content');
	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};
	
	return (
		<Box className={classes.section}>
			<Typography variant="h6" color="textPrimary">{t('filter')}</Typography>
			{/*Type*/}
			<Box className={classes.filterBox}>
				<Box className={classes.filterTitle}
				     onClick={() => {
					     setFilterClicked({ ...filterClicked, type: !filterClicked.type });
				     }}
				>
					<Typography variant="p" color="textPrimary">{t('type')}</Typography>
					<FontAwesomeIcon icon={filterClicked.type ? faMinus : faPlus}
					                 className={classes.plusIcon}
					/>
				</Box>
				<Box className={classes.subTitle} style={{ display: filterClicked.type ? null : 'none' }}>
					{types.map((type) => {
						return (
							<Box display="flex" alignItems="center">
								<CustomCheckbox />
								<Typography variant="p"
								            color="textPrimary"
								>{t(type)}</Typography>
							</Box>
						);
					})}
				</Box>
			</Box>
			{/*Publish year*/}
			<Box className={classes.filterBox}>
				<Box className={classes.filterTitle}
				     onClick={() => {
					     setFilterClicked({ ...filterClicked, year: !filterClicked.year });
				     }}
				>
					<Typography variant="p" color="textPrimary">{t('publish-year')}</Typography>
					<FontAwesomeIcon icon={filterClicked.year ? faMinus : faPlus}
					                 className={classes.plusIcon}
					/>
				</Box>
				<Box className={classes.subTitle} style={{ display: filterClicked.year ? null : 'none' }}>
					{year.map((year) => {
						return (
							<Box display="flex" alignItems="center">
								<CustomRadio checked={selectedValue === year} onChange={handleChange} value={year} />
								<Typography variant="p"
								            color="textPrimary"
								>{year}</Typography>
							</Box>
						);
					})}
				</Box>
			</Box>
			{/*tag*/}
			<Box className={classes.filterBox}>
				<Box className={classes.filterTitle}
				     onClick={() => {
					     setFilterClicked({ ...filterClicked, tags: !filterClicked.tags });
				     }}
				>
					<Typography variant="p" color="textPrimary">{t('tag')}</Typography>
					<FontAwesomeIcon icon={filterClicked.tags ? faMinus : faPlus}
					                 className={classes.plusIcon}
					/>
				</Box>
				<Box className={classes.subTitle}
				     alignItems="center"
				     style={{ display: filterClicked.tags ? null : 'none' }}
				>
					<Box className={classes.tagBox}
					     bgcolor={selectedTag.eeg ? theme.selectedColor.selected : (theme.palette.mode === 'dark' ? theme.selectedColor.tag.darkTag : theme.selectedColor.tag.lightTag)}
					     onClick={() => {
						     setSelectedTag({ ...selectedTag, eeg: !selectedTag.eeg });
					     }}
					>
						<FontAwesomeIcon icon={faHashtag}
						                 color={theme.palette.text.primary}
						/>
						<Typography variant="p"
						            color="textPrimary"
						            className={classes.tagsTitle}
						>EEG</Typography>
					</Box>
					<Box className={classes.tagBox}
					     bgcolor={selectedTag.mri ? theme.selectedColor.selected : (theme.palette.mode === 'dark' ? theme.selectedColor.tag.darkTag : theme.selectedColor.tag.lightTag)}
					     onClick={() => {
						     setSelectedTag({ ...selectedTag, mri: !selectedTag.mri });
					     }}
					>
						<FontAwesomeIcon icon={faHashtag} color={theme.palette.text.primary} />
						<Typography variant="p"
						            color="textPrimary"
						            className={classes.tagsTitle}
						>MRI</Typography>
					</Box>
					<Box className={classes.tagBox}
					     bgcolor={selectedTag.etc ? theme.selectedColor.selected : (theme.palette.mode === 'dark' ? theme.selectedColor.tag.darkTag : theme.selectedColor.tag.lightTag)}
					     onClick={() => {
						     setSelectedTag({ ...selectedTag, etc: !selectedTag.etc });
					     }}
					>
						<FontAwesomeIcon icon={faHashtag} color={theme.palette.text.primary} />
						<Typography variant="p"
						            color="textPrimary"
						            className={classes.tagsTitle}
						>etc.</Typography>
					</Box>
				</Box>
			</Box>
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
}));

export default FilterContent;