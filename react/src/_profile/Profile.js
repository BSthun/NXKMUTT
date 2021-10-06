import {Box,Stack,Container} from '@mui/material'
import PageBanner from '../components/layout/PageBanner'
import ProfileBody from './components/ProfileBody'
import ProfileSideBar from './components/ProfileSideBar'


const Profile = ()=>{
    return(
        <Stack direction="column" alignItems="center" bgcolor="background.default">
			<PageBanner title={"Firstname Lastname"} breadcrumbs={[{ href: '/member', text: 'Member' },{href: '/neurologis',text:"Neurologist"}]}/>
			
			<Container  maxWidth="lg">
				<Box display="flex"
				     justifyContent="space-between"
				     width="100%"
				     flexDirection={{ xs: 'column-reverse', md: 'row' }}>
					<Box flex="1" overflow="hidden" marginBottom={10}>
					<ProfileSideBar/>
                    </Box>
					<Box flex="4" marginLeft={{xs:0,md:5}} mt={5}>
                    <ProfileBody/>
					</Box>
				</Box>
			</Container>
		</Stack>
    )
}

export default Profile