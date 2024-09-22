import React from "react"

import "./Employers.css"
import AvivaLogo from "../../assets/images/logo-transparent.png"
import AltoLogo from "../../assets/images/alto-logo.png"
import JDALogo from "../../assets/images/jda-logo.png"

const Employers = () => {
	return (
		<section
			id='employers'
			className='employers'
			style={{ marginTop: "80px" }}
		>
			<h2 className='subheader'>Past & Current Employers</h2>
			<div className='employers-container '>
				<div className='employers-item'>
					<figure>
						<img
							src={AvivaLogo}
							className='logo'
							alt='aviva logo'
						/>
					</figure>
					<figcaption>Studio Aviva Jifei Xue</figcaption>
				</div>
				<div className='employers-item'>
					<figure>
						<img
							src={AltoLogo}
							className='logo'
							alt='aviva logo'
						/>
					</figure>
					<figcaption>Alto Technology</figcaption>
				</div>
				<div className='employers-item'>
					<figure>
						<img
							src={JDALogo}
							className='logo'
							alt='aviva logo'
						/>
					</figure>
					<figcaption>Blue Yonder</figcaption>
				</div>
			</div>
		</section>
	)
}

export default Employers
