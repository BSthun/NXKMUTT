import { useEffect, useRef, useState } from 'react'

const MarkdownImage = ({ ...props }) => {
	const image = useRef(null)
	const [isVisited, setIsVisited] = useState(false)
	const [, setLoaded] = useState(false)

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '15%',
			threshold: 0.5,
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisited(true)
				}
			})
		}, options)

		if (image.current) observer.observe(image.current)

		return () => {
			if (image.current) observer.unobserve(image.current)
			setIsVisited(false)
			image.current = null
		}
	}, [])

	return (
		<img
			ref={image}
			onLoad={() => setLoaded(true)}
			style={{
				opacity: isVisited ? 1 : 0,
				transition: 'opacity 1s ease-in-out',
			}}
			alt="Markdown attached"
			{...props}
		/>
	)
}

export default MarkdownImage
