import {
	faMinus,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const types = ['blog', 'paper', 'publication'];
const year = ['2020', '2021'];
const tags = ['EEG', 'MRI', 'etc.'];

const FilterContent = () => {
	const classes = useStyles();
	const [filterClicked, setFilterClicked] = useState({
		type: false,
		year: false,
		tags: false,
	});
	const [t] = useTranslation('content');
	
	return (
		<Box display="flex" flexDirection="column" padding="50px 10px 0 20px">
			<Typography variant="h6" color="textPrimary">{t('filter')}</Typography>
			{/*check box*/}
			<Box className={classes.filterBox}>
				<Box className={classes.filterTitle}
				     onClick={() => {
					     setFilterClicked({ ...filterClicked, type: !filterClicked.type });
				     }}
				>
					<Typography variant="p" color="textPrimary">- {t('type')}</Typography>
					<FontAwesomeIcon icon={filterClicked.type ? faMinus : faPlus}
					                 className={classes.plusIcon}
					/>
				</Box>
				<Box className={classes.subTitle} style={{ display: filterClicked.type ? null : 'none' }}>
					{types.map((type) => {
						return (
							<Typography variant="p"
							            color="textPrimary"
							            className={classes.inSubTitle}
							>{t(type)}</Typography>
						);
					})}
				</Box>
			</Box>
			{/*radio*/}
			<Box className={classes.filterBox}>
				<Box className={classes.filterTitle}
				     onClick={() => {
					     setFilterClicked({ ...filterClicked, year: !filterClicked.year });
				     }}
				>
					<Typography variant="p" color="textPrimary">- {t('publish-year')}</Typography>
					<FontAwesomeIcon icon={filterClicked.year ? faMinus : faPlus}
					                 className={classes.plusIcon}
					/>
				</Box>
				<Box className={classes.subTitle} style={{ display: filterClicked.year ? null : 'none' }}>
					{year.map((year) => {
						return (
							<Typography variant="p"
							            color="textPrimary"
							            className={classes.inSubTitle}
							>{year}</Typography>
						);
					})}
				</Box>
			</Box>
			{/*tag or chip box*/}
			<Box className={classes.filterBox}>
				<Box className={classes.filterTitle}
				     onClick={() => {
					     setFilterClicked({ ...filterClicked, tags: !filterClicked.tags });
				     }}
				>
					<Typography variant="p" color="textPrimary">- {t('tag')}</Typography>
					<FontAwesomeIcon icon={filterClicked.tags ? faMinus : faPlus}
					                 className={classes.plusIcon}
					/>
				</Box>
				<Box className={classes.subTitle} style={{ display: filterClicked.tags ? null : 'none' }}>
					{tags.map((tag) => {
						return (
							<Typography variant="p"
							            color="textPrimary"
							            className={classes.inSubTitle}
							>{tag}</Typography>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	filterBox: {
		padding: '15px 0px 5px 0px',
		height: 'auto',
		cursor: 'pointer',
	},
	filterTitle: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between',
	},
	subTitle: {
		display: 'flex',
		flexDirection: 'column',
		padding: '10px 0px 0px 20px',
	},
	inSubTitle: {
		marginBottom: '5px',
		cursor: 'pointer',
	},
	plusIcon: {
		cursor: 'pointer',
		color: theme.palette.text.primary,
	},
}));

export default FilterContent;