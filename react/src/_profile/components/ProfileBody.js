import {
    faAt,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import {Box, Chip, Grid, Paper, Stack, Typography} from '@mui/material'
import ContentChip from './ContentChip'
import ContactIcon from './ContactIcon';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
const ProfileBody = ()=>{
    return(
        <Box minHeight="80vh">
            <Stack gap={5} mb={10} >
            <ContentChip header="biology">
            <Typography color="text.primary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            </ContentChip>

            <ContentChip header="contact">
                <Grid container spacing={2} gap={2} p={5} paddingX={10}>
                    <ContactIcon icon={faPhone}> +66909361134 </ContactIcon>
                    <ContactIcon icon={faAt}> tine@thistine.com </ContactIcon>
                    <ContactIcon icon={faFacebook}> Sittichok xxxxxx </ContactIcon>
                    <ContactIcon icon={faTwitter}> xxx_Xxxx </ContactIcon>
                </Grid>
            </ContentChip>
            <ContentChip header="publication" >
                <Grid container gap={2} >
                    {[1,2,3,4,5,6].map(item=> <Grid key={item}  item xs={4}>
                        <Box height="100px" width="100%" bgcolor="white" borderRadius="10px" ></Box>
                    </Grid> 
                )}
                </Grid>
            </ContentChip>
            </Stack>
        </Box>
    )
}

export default ProfileBody