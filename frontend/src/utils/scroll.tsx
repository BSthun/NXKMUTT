import { useEffect } from 'react'

export function scroll() {
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth',
	})
}

export function useScroll() {
	return useEffect(() => {
		scroll()
	}, [])
}
