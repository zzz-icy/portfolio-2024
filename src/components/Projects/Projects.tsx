import React from "react"
import "./Projects.css"
import AltoScreenshots from "../../assets/images/projects/alto-screenshots.png"
import AltoWeb from "../../assets/images/projects/ridealto-web.png"
import Aviva from "../../assets/images/projects/aviva.png"
import AdvancedCSS from "../../assets/images/projects/advanced-css.png"

const Projects = () => {
	return (
		<section id='projects'>
			<div className='projects-container'>
				<div className='project'>
					<img
						src={AltoScreenshots}
						height={400}
						alt='alto mobile'
					/>
					<a
						href='https://apps.apple.com/us/app/alto/id1442044302'
						className='project-link'
					>
						Alto Passenger Mobile App (React Native)
					</a>
				</div>
				<div className='project'>
					<img
						src={AltoWeb}
						height={400}
						alt='alto web'
					/>
					<a
						href='https://ridealto.app/'
						className='project-link'
					>
						Alto Passenger Web App (Angular)
					</a>
				</div>
				<div className='project'>
					<img
						src={Aviva}
						height={400}
						alt='alto web'
					/>
					<a
						href='https://avivajifeixue.com/'
						className='project-link'
					>
						Studio Aviva Jifei Xue (Next.js, Node.js, Express.js, Firebase)
					</a>
				</div>
				<div className='project'>
					<img
						src={AdvancedCSS}
						height={250}
						alt='AdvancedCSS'
					/>
					<a
						href='https://advanced-css-and-sass.netlify.app'
						className='project-link'
					>
						Advanced CSS and SASS Practice
					</a>
				</div>
			</div>
		</section>
	)
}

export default Projects
