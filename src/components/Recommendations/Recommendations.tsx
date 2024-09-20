import React from "react"

import "./Recommendations.css"
import Michael from "../../assets/images/recommendations/michael.jpeg"
import Lucy from "../../assets/images/recommendations/lucy.jpeg"
import Jordan from "../../assets/images/recommendations/jordan.jpeg"
import Jonathan from "../../assets/images/recommendations/jonathan.jpeg"

const Recommendations = () => {
	return (
		<section
			id='recommendations'
			className='recommendations-section'
		>
			<div className='recommendations-container'>
				<span className='subheading'>What people say about me</span>
				{/* <h2 className='heading-secondary'>What people say about me</h2> */}
				{/* MICHAEL	 */}
				<div className='recommendations'>
					<figure className='recommendation'>
						<img
							className='recommendation-img'
							src={Michael}
							alt='michael'
						/>
						<blockquote className='recommendation-text'>
							Hannah is an excellent software engineer, problem-solver, and
							teammate. <br />
							<br />I recommend her wholeheartedly. <br />
							<br />
							Hannah is a strong React Native developer. She is able to own
							large problems and features completely. The team regularly counted
							on her to identify a problem, work with whoever else she needed
							(backend engineers, UX, the business, etc.), and then design,
							develop, and deliver that solution. I know I can trust her to
							build complete, correct, and reliable features in our mobile
							application. <br />
							<br />
							On top of that, she has demonstrated a real passion (and knack!)
							for native iOS development and iOS feature integration. We
							regularly talk about the latest and greatest iOS features and she
							always has an idea of how we could integrate them into our app and
							examples of how other apps are already using them well.
							<br />
							<br /> Outside of regular development work, she also built several
							tools that had big impacts on our company - she is really great at
							identifying and solving small issues that have big outcomes!
							<br />
							<br />
							Lastly, Hannah is just a great teammate. She is kind, helpful, and
							always has a can-do attitude. She will take on any challenge and
							always speaks up for our users.
						</blockquote>
						<p className='recommendation-name'>&mdash; Michael Davis</p>
					</figure>

					{/* LUCY	 */}
					<figure className='recommendation'>
						<img
							className='recommendation-img'
							src={Lucy}
							alt='lucy'
						/>
						<blockquote className='recommendation-text'>
							Hannah is an incredibly talented engineer, with skills and
							experience in cross-platform and native mobile development, as
							well as web development. I collaborated closely with Hannah over
							the course of four years on a number of mobile and web projects.
							Hannah has a great knack for diving right into new technologies,
							eagerly exploring libraries, frameworks, and languages she hasn’t
							worked with before and quickly producing outputs of high value.
							Hannah devises creative solutions to complex problems, thinking
							outside the box and reaching out cross-functionally and to key
							stakeholders in order to fully understand the problem at hand and
							build a robust solution. I highly recommend Hannah for a frontend
							engineering position.
						</blockquote>
						<p className='recommendation-name'>&mdash; Lucy McGuigan</p>
					</figure>

					{/* JORDAN	 */}
					<figure className='recommendation'>
						<img
							className='recommendation-img'
							src={Jordan}
							alt='jordan'
						/>
						<blockquote className='recommendation-text'>
							Hannah and I worked together at Alto for over 4 years. She and I
							got to grow together in our development careers, and she was
							always a pleasure to work with and smart as a whip on any problem
							she was given to solve. I always enjoyed having her around, and
							she was always innovating--taking it upon herself to find
							solutions to team problems (she created the MOST beloved On Call
							scheduling app). She was always learning and growing, and I am
							proud that we grew into senior developers together. Hannah would
							be a huge asset to your team, don't miss your chance to hire her!!
						</blockquote>
						<p className='recommendation-name'>&mdash; Jordan Fjordbak</p>
					</figure>

					{/* JONATHAN	 */}
					<figure className='recommendation'>
						<img
							className='recommendation-img'
							src={Jonathan}
							alt='Jonathan'
						/>
						<blockquote className='recommendation-text'>
							When I first met Hannah she was just leaving college and starting
							her career. In a flash she took on some of the hardest problems
							and found little ways to solve big problems in our organization.
							Her contributions reverberated throughout the org. At Alto she
							focused on web and mobile application and continued to grow her
							knowledge from Javascript, to Typescript, to native Swift
							development. There weren't any problems Hannah couldn't tackle
							with her imaginative brain. My recommendation is to give her space
							and you will always be pleasantly surprised.
						</blockquote>
						<p className='recommendation-name'>&mdash; Jonathan Campos</p>
					</figure>
				</div>
			</div>
		</section>
	)
}

export default Recommendations
