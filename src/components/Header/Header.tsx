import React from "react"

import "./Header.css"

const Header = () => {
	return (
		<nav>
			<div className='container brackets'>
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
					Recommendations
				</a>
			</div>
		</nav>
	)
}

export default Header
