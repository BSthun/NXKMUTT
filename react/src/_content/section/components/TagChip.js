import { Chip } from "@mui/material"
import { useState } from "react";


const TagChip = ({name,value,setvalue})=>{
    const [ison , setison] = useState(value.includes(name));
    const handle = ()=>{
        setison(!ison)
        if(value.includes(name)){
            setvalue(value.filter(item=>name!==item))
        }else{
            setvalue([...value,name])
        }
    }
    return(
        <Chip style={{marginLeft:0}}  label={name} color={ison ? "secondary" : "default"} onClick={handle} variant={ison ? "filled" :"outlined"} />
    )
}


export default TagChip;