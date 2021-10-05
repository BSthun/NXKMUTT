import {Stack,Avatar,Typography,Box} from '@mui/material'

const AuthorAvatar = ({name,subject})=>{
    function stringToColor() {
        let hash = 0;
        let i;
      
        for (i = 0; i < name.length; i += 1) {
          hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
      
        return color;
      }

    const avatarfuc = ()=>{
        return {
            sx: {
              bgcolor: stringToColor(),
              color:"white",
            },
            children: `${name.charAt(0)+name.charAt(name.length-1)}`,
          };
    }
    return(
        <Stack marginTop={3} direction="row" gap={2} alignItems="center" >
            <Avatar {...avatarfuc()}  /> 
            <Box>
            <Typography height="fit-content" color="text.primary">{name}</Typography>
            <Typography height="fit-content" fontWeight="light" color="GrayText">{subject}</Typography>
            </Box> 
        </Stack>
    )

}

export default AuthorAvatar