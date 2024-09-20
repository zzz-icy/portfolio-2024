import React from "react"
import "./Footer.css"
import Linkedin from "../../assets/images/LinkedIn_logo_initials.png"
import Github from "../../assets/images/github-logo.webp"

const Footer = () => {
	return (
		<footer>
			<div className='footer'>
				<p className='name'>Hannah Zhang</p>
				<a href='https://www.linkedin.com/in/hannah-zhang-zzz/'>
					<img
						src={Linkedin}
						height={25}
						alt='linkedin'
					/>
				</a>
				<a
					href='https://github.com/zzz-icy?tab=overview&from=2024-09-01&to=2024-09-20'
					className='footer-link'
				>
					<img
						src={Github}
						height={26}
						alt='linkedin'
					/>
				</a>
			</div>
		</footer>
	)
}

export default Footer
