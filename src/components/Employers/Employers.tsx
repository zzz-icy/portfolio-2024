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
			<h2 style={{ color: "#777", textAlign: "center", marginBottom: "70px" }}>
				Past & Current Employers
			</h2>
			<div className='employers-container '>
				<div className='employers-item'>
					<figure>
						<img
							src={AvivaLogo}
							className=''
							alt='aviva logo'
							style={{ height: 60 }}
						/>
					</figure>
					<p>Studio Aviva Jifei Xue</p>
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
					<p>Alto Technology</p>
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
					<p>Blue Yonder</p>
				</div>
			</div>
		</section>
	)
}

export default Employers
