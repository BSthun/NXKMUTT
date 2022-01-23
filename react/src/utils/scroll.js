import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function scroll() {
	window.scroll(0, 0, {
		scrollBehavior: 'smooth'
	})
}
export function useScroll() {
	return useEffect(() => {
		scroll()
	}, [])
}