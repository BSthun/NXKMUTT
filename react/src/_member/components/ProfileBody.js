import {
	Box,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogItem from '../../_content/components/BlogItem';
import SectionTitle from '../../components/layout/SectionTitle';
import { strapiAxios } from '../../utils/axios';
import AffiliationCard from './AffiliationCard';
import AttributeCard from './AttributeCard';
import ContactCard from './ContactCard';
import EducationCard from './EducationCard';

const ProfileBody = ({ member }) => {
	const [t, i18n] = useTranslation('content');
	
	return (
		<Box minHeight="80vh" flex={1}>
			<Stack direction={{ xs: 'column', md: 'row' }}
			       alignItems="center"
			       justifyContent="center"
			       gap={8}
			       m="36px 12px"
			>
				<Box sx={{
					width: 240,
					aspectRatio: '1',
					overflow: 'hidden',
					borderRadius: '50%',
				}}
				>
					<img style={{ width: '100%' }}
					     src={strapiAxios.baseURL + member.attributes.photo?.data.attributes.url}
					     alt={member.name}
					/>
				</Box>
				<Box flex={1} textAlign={{ xs: 'center', md: 'unset' }} maxWidth={720}>
					<Typography
						variant="h3"
						color="textPrimary"
						gutterBottom
					>
						{member.attributes[`prefix_${i18n.language}`]} {member.attributes[`name_${i18n.language}`]} {member.attributes[`surname_${i18n.language}`]}
					</Typography>
					<Typography
						variant="h6"
						color="textPrimary"
						gutterBottom
					>
						{member.attributes[`position`]}
					</Typography>
					<Typography
						variant="caption"
						color="textPrimary"
					>
						{member.attributes[`bio`]}
					</Typography>
				</Box>
			</Stack>
			
			<Grid container spacing={5}>
				<Grid item md={6} xs={12}>
					<AffiliationCard member={member} />
				</Grid>
				<Grid item md={6} xs={12}>
					<EducationCard member={member} />
				</Grid>
				<Grid item md={6} xs={12}>
					<ContactCard member={member} />
				</Grid>
				{
					member.attributes.attrs.map((attr, index) => (
						<Grid item md={6} xs={12}>
							<AttributeCard attr={{attr}} />
						</Grid>
					))
				}
			</Grid>
			
			<SectionTitle title={t('publications')} />
			<Grid spacing={5} container mb={8}>
				{member?.attributes.publications?.data.map(({ id, attributes }) =>
					<Grid key={id} item md={4} xs={12}>
						<BlogItem
							title={attributes.title}
							description={attributes.desc}
							date={attributes.published}
							background={strapiAxios.baseURL + attributes.banner?.data.attributes.url}
							to={`/post/${attributes.slug}`}
							height
						/>
					</Grid>,
				)}
			</Grid>
		</Box>
	);
};

export default ProfileBody;