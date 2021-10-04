import { Box, Chip, Stack, Typography } from "@mui/material"
import FilterBox from "../../_content/section/components/FilterBox";
import TagChip from "../../_content/section/components/TagChip";

const SideBar = ()=>{
    return(
        <Box borderRight="1px solid white">
            <Typography variant="p" color="textPrimary" >Detail</Typography>
            <Box marginLeft={5}>
            
            <Stack marginTop={3} direction="row" gap={2} alignitems="center"> <Typography color="white" height="fit-contents" >Author : </Typography> <Chip label="Tine" /> </Stack>
            <Stack marginTop={3} direction="row" gap={2} alignitems="center"> <Typography color="white" height="fit-contents" >Date : </Typography> <Chip label="12/02/2021" /> </Stack>
            
            </Box>

            <Typography variant="p" color="textPrimary" >Tags</Typography>
                <Stack direction="row" gap={1} flexWrap="wrap" marginTop={5} >
                {["asd","asdwasd","asd","asdwasd","asd","asdwasd"].map(item=><Chip label={item} key={item} />)}
                </Stack>
        </Box>
    )
}

export default SideBar;