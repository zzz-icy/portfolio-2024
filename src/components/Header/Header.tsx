import React from "react"

import "./Header.css"

const Header = () => {
	return (
		<nav>
			<div className='container brackets'>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a
					className='main-nav-link'
					href='#'
				>
					About Me
				</a>
				{/* <a
					className='main-nav-link'
					href='#experiences'
				>
					Experiences
				</a> */}
				<a
					className='main-nav-link'
					href='#projects'
				>
					Projects
				</a>
				<a
					className='main-nav-link'
					href='#employers'
				>
					Employers
				</a>
				<a
					className='main-nav-link'
					href='#recommendations'
				>
					Testimonials
				</a>
			</div>
		</nav>
	)
}

export default Header
