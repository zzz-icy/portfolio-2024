import React from "react"
import "./Projects.css"
import AltoScreenshots from "../../assets/images/projects/alto-screenshots.png"
import AltoWeb from "../../assets/images/projects/ridealto-web.png"
import Aviva from "../../assets/images/projects/aviva.png"
import AdvancedCSS from "../../assets/images/projects/advanced-css.png"
import Omnifood from "../../assets/images/projects/omnifood.png"

const Projects = () => {
	return (
		<section
			id='projects'
			className='projects'
		>
			<h2 style={{ color: "#777", textAlign: "center", marginBottom: "70px" }}>
				Projects
			</h2>
			<div className='projects-container'>
				<div className='project-item'>
					<div className='image-container'>
						<img
							className='project-image'
							src={Aviva}
							// height={400}
							alt='alto web'
						/>
					</div>
					<a
						href='https://avivajifeixue.com/'
						className='project-link'
					>
						Studio Aviva Jifei Xue (Next.js, Node.js, Express.js, Firebase)
					</a>
				</div>
				<div className='project-item'>
					<div className='image-container'>
						<img
							className='project-image'
							src={AltoScreenshots}
							// height={400}
							alt='alto mobile'
						/>
					</div>
					<a
						href='https://apps.apple.com/us/app/alto/id1442044302'
						className='project-link'
					>
						Alto Passenger Mobile App (React Native)
					</a>
				</div>
				<div className='project-item'>
					<div className='image-container'>
						<img
							className='project-image'
							src={AltoWeb}
							// height={400}
							alt='alto web'
						/>
					</div>
					<a
						href='https://ridealto.app/'
						className='project-link'
					>
						Alto Passenger Web App (Angular)
					</a>
				</div>

				<div className='project-item'>
					<div className='image-container'>
						<img
							className='project-image'
							src={AdvancedCSS}
							// height={250}
							alt='AdvancedCSS'
						/>
					</div>
					<a
						href='https://advanced-css-and-sass.netlify.app'
						className='project-link'
					>
						Advanced CSS and SASS Practice
					</a>
				</div>
				<div className='project-item'>
					<div className='image-container'>
						<img
							className='project-image'
							src={Omnifood}
							// height={250}
							alt='HTML CSS Practice'
						/>
					</div>
					<a
						href='https://cosmic-beignet-295e3d.netlify.app'
						className='project-link'
					>
						HTML CSS Practice
					</a>
				</div>
			</div>
		</section>
	)
}

export default Projects
