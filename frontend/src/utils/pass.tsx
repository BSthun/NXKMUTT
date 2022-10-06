import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const pass = (path: string | undefined, el: ReactElement) => {
	if (path) {
		return <Link to={path}>
			{el}
		</Link>
	}
	return el
}

export default pass
