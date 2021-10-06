import { Stack } from "@mui/material"
import ContactSection from "../_home/sections/ContactSection"

const Contact = ()=>{
    return(
        <Stack alignItems="center" justifyContent="center" minHeight="100vh"  bgcolor="background.default">
            <ContactSection/>
        </Stack>
    )
}

export default Contact