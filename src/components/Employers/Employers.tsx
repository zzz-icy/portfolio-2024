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
		>
			<div className='employers-item'>
				<figure>
					<img
						src={AvivaLogo}
						className=''
						alt='aviva logo'
						style={{ height: 60 }}
					/>
				</figure>
				<p>Studio Aviva Jifei Xue, LLC</p>
			</div>
			<div className='employers-item'>
				<figure>
					<img
						src={AltoLogo}
						className=''
						alt='aviva logo'
						style={{ height: 60 }}
					/>
				</figure>
				<p>Alto Technology LLC</p>
			</div>
			<div className='employers-item'>
				<figure>
					<img
						src={JDALogo}
						className=''
						alt='aviva logo'
						style={{ height: 60 }}
					/>
				</figure>
				<p>Alto Technology LLC</p>
			</div>
		</section>
	)
}

export default Employers
