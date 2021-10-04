import BlogSection from "./components/BlogSection"
import SideBar from "./components/SideBar"
import { Box,Container,Typography } from "@mui/material"


const Post = ()=>{
    return(
        <Box display="flex" flexDirection="column" alignItems="center" bgcolor="background.default">
            <Box paddingTop={30} paddingBottom={30}>
                <Typography variant="h2" color="text.primary" >Post</Typography>
            </Box>

        <Container maxWidth="lg">
            <Box display="flex"
                 justifyContent="space-between"
                 width="100%"
                 flexDirection={{ xs: 'column', md: 'row' }}>
                <Box flex="1" overflow="hidden" marginBottom={10} >
                    <SideBar/>
                </Box>
                <Box flex="4">
                    <BlogSection/>
                </Box>
            </Box>
        </Container>
    </Box>
    )
}

export default Post