import { Chip } from "@mui/material"
import { useState } from "react";


const TagChip = ({name})=>{
    const [ison , setison] = useState(false);
    return(
        <Chip style={{marginLeft:0}}  label={name} color={ison ? "secondary" : "default"} onClick={()=>setison(!ison)} variant={ison ? "filled" :"outlined"} />
    )
}


export default TagChip;