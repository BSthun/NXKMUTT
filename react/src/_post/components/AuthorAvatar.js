import {Stack,Avatar,Typography,Box, alpha} from '@mui/material'
import { useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';

const AuthorAvatar = ({name,subject,src,member})=>{
    const theme = useTheme();
    console.log(theme)
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
      <Link to={`/member/${member}`}>
        <Stack marginTop={3} direction="row" gap={2} alignItems="center" padding={2} sx={{backgroundColor: `${alpha(theme.palette.action.active,.085)}`, borderRadius: '5px'}}>
            <Avatar {...avatarfuc()}><img src={src} style={{width: '100%'}}/></Avatar> 
            <Box>
            <Typography height="fit-content" color="text.primary" fontWeight={550}>{name}</Typography>
            <Typography height="fit-content" fontWeight="light" color="GrayText">{subject}</Typography>
            </Box> 
        </Stack>
    </Link>)

}

export default AuthorAvatar