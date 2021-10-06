import {Avatar, Box,Stack, Typography} from '@mui/material'
const ProfileSideBar = ()=>{
    const profilepic = `https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.6435-9/69999079_867212440345352_2645553958591922176_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFIaT0-vKeZl-tKtA_G1ssLxZ-ZDAFHbXLFn5kMAUdtcodrIQfzlKEkFdqi78Yh6tzb4lLjgyPJAzoXSVDqeHOE&_nc_ohc=_mc4q0_1Es0AX9588rq&_nc_ht=scontent.fbkk5-6.fna&oh=d594ca4d3f1d283e127e27a5cb69e828&oe=6183ABA9`
    return(
        <Box >
            <Stack gap={3} mt={5}>
                <Avatar src={profilepic} style={{width:"100%",height:"100%"}} />
                <Stack gap={0} >
                    <Typography variant="h5" textAlign="center" color="text.primary" >Firstname Lastname</Typography>
                    <Typography textAlign="center"  color="text.primary" > Neurologist </Typography>
                </Stack>
                <Typography textAlign="center" color="gray" > A short biography or anything to display on profile </Typography>
            </Stack>
        </Box>
    )
}

export default ProfileSideBar