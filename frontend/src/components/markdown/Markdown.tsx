import { alpha, Theme, Typography } from '@mui/material'
import { useTheme } from '@mui/styles'
import ReactMarkdown from 'react-markdown'
import { strapiAxios } from '../../utils/axios'
import MarkdownImage from './MarkdownImage'

const Markdown = ({ children }, ...props) => {
	const theme: Theme = useTheme()
	return (
		<ReactMarkdown
			{...props}
			components={{
				// h1: ({node, ...props}) => <Typography variant='h1' {...props} />,
				// h2: ({node, ...props}) => <Typography variant='h2' {...props} />,
				// h3: ({node, ...props}) => <Typography variant='h3' {...props} />,
				// h4: ({node, ...props}) => <Typography variant='h4' {...props} />,
				// h5: ({node, ...props}) => <Typography variant='h5' {...props} />,
				// h6: ({node, ...props}) => <Typography variant='h6' {...props} />,
				p: ({ node, ...props }) => (
					<Typography
						variant="body1"
						{...props}
					/>
				),
				u: ({ node, ...props }) => (
					<Typography
						variant="body1"
						{...props}
						sx={{
							borderBottom: `1px solid ${theme.palette.text.primary}`,
						}}
					/>
				),
				a: ({ node, ...props }) => (
					<Typography
						component="a"
						{...props}
						sx={{
							borderBottom: `1px solid ${theme.palette.text.primary}`,
							paddingLeft: '.25rem',
							paddingRight: '.25rem',
							marginLeft: '.25rem',
							marginRight: '.25rem',
							borderRadius: '5px 5px 0 0',
							transition:
								'background .2s ease-in-out, padding-left .2s ease-in-out, padding-right .2s ease-in-out',
							'&:hover': {
								background: alpha(
									theme.palette.text.primary,
									0.1
								),
							},
						}}
					/>
				),
				img: ({ node, ...props }) => (
					<MarkdownImage
						src={strapiAxios.baseURL + node.properties.src}
						{...props}
					/>
				),
				blockquote: ({ node, ...props }) => (
					<Typography
						variant="body1"
						{...props}
						component="blockquote"
						sx={{
							borderLeft: `4px solid ${alpha(
								theme.palette.text.primary,
								0.3
							)}`,
							padding: '.5rem',
							background: alpha(theme.palette.text.primary, 0.1),
						}}
					/>
				),
			}}
		>
			{children}
		</ReactMarkdown>
	)
}

export default Markdown
