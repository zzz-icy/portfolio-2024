import React from "react"
import "./About.css"
import GithubCommits from "../../assets/images/github-commits.png"
const About = () => {
	return (
		<section
			className='about'
			id='about'
		>
			<p>
				Hey there, I'm <strong>Hannah</strong>! <br />
				<br /> I’m all about crafting sleek, intuitive UIs and creating seamless
				user experiences that just <em>feel</em> right. <br />
				<br />
				Whether it's solving design puzzles or coding up something fresh, I’m
				always chasing that perfect balance of form and function. <br />
				<br />
				Oh, and when I’m not deep in design mode, I’m juggling life as a mom to
				a tiny human&#x1F476; (3 months old!) and a pretty chill cat&#x1F63A;.
				<br />
				<br />
				Let’s make something awesome together!
			</p>
			<img
				src={GithubCommits}
				className='github'
				alt='GithubCommits'
			/>
		</section>
	)
}

export default About
