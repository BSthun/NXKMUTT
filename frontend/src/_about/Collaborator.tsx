import React from 'react'
import { useScroll } from '@/utils/scroll'
import PageBanner from '@/components/layout/PageBanner'
import { Stack } from '@mui/material'
import MemberSecion from '@/_home/sections/MemberSection'
import ContactSection from '@/_home/sections/ContactSection'
import CollaboratorSection from '@/_about/sections/CollaboratorSection'

const Collaborator = () => {
	useScroll()

	return (
		<div>
			<PageBanner
				title="Collaborator"
				breadcrumbs={[
					{ href: '/', text: 'Home' },
					{ href: '/about', text: 'About' },
				]}
			/>
			<Stack
				justifyContent="center"
				bgcolor="background.default"
			>
				<CollaboratorSection />
			</Stack>
		</div>
	)
}

export default Collaborator
