import { alpha, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import ReactMarkdown from "react-markdown";
import { strapiAxios } from "../../utils/axios";
import MarkdownImage from "./MarkdownImage";

const Markdown = ({children}, ...props) => {
    const theme = useTheme();
    return <ReactMarkdown {...props} components={{
        h1: ({node, ...props}) => <Typography variant='h4' {...props} />,
        h2: ({node, ...props}) => <Typography variant='h5' {...props} />,
        h3: ({node, ...props}) => <Typography variant='h6' {...props} />,
        h4: ({node, ...props}) => <Typography variant='h6' {...props} />,
        h5: ({node, ...props}) => <Typography variant='h6' {...props} />,
        h6: ({node, ...props}) => <Typography variant='h6' {...props} />,
        p: ({node, ...props}) => <Typography variant='body1' {...props} />,
        a: ({node, ...props}) => <Typography variant='a' component="a" {...props} sx={{
            borderBottom: `1px solid ${ theme.palette.text.primary }`,
            paddingLeft: '.25rem',
            paddingRight: '.25rem',
            marginLeft: '.25rem',
            marginRight: '.25rem',
            transition: 'background .2s ease-in-out, padding-left .2s ease-in-out, padding-right .2s ease-in-out',
            "&:hover": {
                background: alpha(theme.palette.text.primary,0.1),
            }
        }} />,
        img: ({node, ...props}) => <MarkdownImage src={strapiAxios.baseURL + node.src} {...props} />,
    }}>
        {children}
    </ReactMarkdown>
};

export default Markdown;