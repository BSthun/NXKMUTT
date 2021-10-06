import {Avatar, Box,Stack, Typography} from '@mui/material'
const ProfileSideBar = ()=>{
    const profilepic = `https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241840764_1946278805560244_4803799378012841887_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG6UPNmZltUQkt6Y2q_ZZ6bouSsw4HwK6qi5KzDgfArqjfhnJYb8vpJ4vQLbar3DQ9WFSQ0uKFFSz3H-Ej5imPf&_nc_ohc=7Y5Jtj85rCwAX_WVaXj&tn=urA0xrjws_8evN7x&_nc_ht=scontent.fbkk5-3.fna&oh=ddc6f358fc3c4c84d3e6ad4200d4f3b9&oe=61615048`
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