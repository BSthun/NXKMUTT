import { useEffect } from 'react'

export function scroll() {
	window.scroll(0, 0, {
		scrollBehavior: 'smooth',
	})
}

export function useScroll() {
	return useEffect(() => {
		scroll()
	}, [])
}
