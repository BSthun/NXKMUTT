import { Box, Chip, Stack, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";

const SideBar = ()=>{
    const [t] = useTranslation('content');

    return(
        <Box borderRight="1px solid white">
            <Typography variant="p" color="textPrimary" >{t('detail').substring(0,1).toUpperCase() + t('detail').substring(1)}</Typography>
            <Box marginLeft={5}>
            
            <Stack marginTop={3} direction="row" gap={2} alignitems="center"> <Typography color="white" height="fit-contents" >{t("author")} : </Typography> <Chip label="Tine" /> </Stack>
            <Stack marginTop={3} direction="row" gap={2} alignitems="center"> <Typography color="white" height="fit-contents" >{t("date")} : </Typography> <Chip label="12/02/2021" /> </Stack>
            
            </Box>

            <Typography variant="p" color="textPrimary" >{t('tag')}</Typography>
                <Stack direction="row" gap={1} flexWrap="wrap" marginTop={5} >
                {["asd","asdwasd","asd","asdwasd","asd","asdwasd"].map(item=><Chip label={item} key={item} />)}
                </Stack>
        </Box>
    )
}

export default SideBar;