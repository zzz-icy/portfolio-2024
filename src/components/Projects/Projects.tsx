import React from "react"
import "./Projects.scss"
import AltoScreenshots from "../../assets/images/projects/alto-screenshots.png"
import AltoWeb from "../../assets/images/projects/ridealto-web.png"
import Aviva from "../../assets/images/projects/aviva.png"
import AdvancedCSS from "../../assets/images/projects/advanced-css.png"
import Omnifood from "../../assets/images/projects/omnifood.png"
const config = [
	{
		imgSrc: Aviva,
		alt: "Aviva Jifei Xue",
		link: "https://avivajifeixue.com/",
		label: "Studio Aviva Jifei Xue (Next.js, Node.js, Express.js, Firebase)",
		// color: "#f8f9f9",
	},
	{
		imgSrc: AltoScreenshots,
		alt: "Alto Passenger App Screenshots",
		link: "https://apps.apple.com/us/app/alto/id1442044302",
		label: "Alto Passenger Mobile App (React Native)",
	},
	{
		imgSrc: AltoWeb,
		alt: "Alto Passenger Web App",
		link: "https://ridealto.app/",
		label: "Alto Passenger Web App (Angular)",
	},
	{
		imgSrc: AdvancedCSS,
		alt: "AdvancedCSS",
		link: "https://advanced-css-and-sass.netlify.app",
		label: "Studio Aviva Jifei Xue (Next.js, Node.js, Express.js, Firebase)",
	},
	{
		imgSrc: Omnifood,
		alt: "Omnifood",
		link: "https://cosmic-beignet-295e3d.netlify.app",
		label: "HTML CSS Practice",
	},
]

const Projects = () => {
	return (
		<section
			id='projects'
			className='projects'
		>
			<h2 className='subheader'>Projects</h2>
			<div className='projects-container'>
				{config.map((item, index) => (
					<div
						className='project-item'
						style={{ backgroundColor: "white" }}
					>
						<a
							href='https://avivajifeixue.com/'
							className='project-link'
						>
							{item.label}
						</a>
						<div className='image-container'>
							<img
								className='project-image'
								src={item.imgSrc}
								// height={400}
								alt={item.alt}
							/>

							<div className='icon'>
								<a
									href={item.link}
									className='iconBox'
									style={{ backgroundColor: "#f8f9f9" }}
								>
									<span className='material-symbols-outlined'>
										arrow_outward
									</span>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Projects
